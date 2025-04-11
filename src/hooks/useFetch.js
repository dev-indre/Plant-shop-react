import { useEffect, useState } from "react";

export default function useFetch(url, folder, apiImg) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to retrieve data from API");
        }
        const data = await response.json();
        const dataWithImages = await Promise.all(
          data.map(async (elem) => {
            let imgPath;
            try {
              imgPath = await import(`../assets/img/${folder}/${elem[apiImg]}`);
            } catch (error) {}
            return {
              ...elem,
              imgSrc: imgPath.default,
            };
          })
        );
        //await new Promise((resolve) => setTimeout(resolve, 5000));
        setData(dataWithImages);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, folder, apiImg]);
  return { data, loading, error };
}
