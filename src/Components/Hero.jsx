import Button from "./Button";
import "./Components-style/Hero.css";

export default function Hero() {
  return (
    <>
    <div className="light-bg">
        <div className="wrapper hero">
            <div className="hero-mid">
                <h1 className="main-title">Plants are our Passion</h1>
                <p className="slogan">Even if you don’t have a green thumb, you can still have a green home.</p>
                <Button colorName={"white-btn"}>GET PLANTING</Button>
            </div>
        </div>
    </div>
    <div className="green-bg dark-line"></div>
    </>
  )
}
