import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TopBanner from "../Components/TopBanner";

export default function Layout() {
  return (
    <div className="container">
      <div>
        <TopBanner />
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
