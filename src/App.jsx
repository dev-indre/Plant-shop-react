import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Title from "./Components/Title";
import TopBanner from "./Components/TopBanner";


export default function App() {
  return (
    <>
   <TopBanner/>
   <Header/>
   <Hero/>
   <Title text1="Shop" text2="By category" showLink={true}/>
   </>
  )
}


