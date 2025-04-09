import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to retrieve data from API");
        }
        const data = await response.json();
        setData(data);
        console.log(data);
      } catch (error) {
        console.log("error");
      }
    };
    fetchData();
  }, [url]);
  return { data };
}
