import BgVideo from "./assets/earth-bg.mp4";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/ServicesData/ServicesData";
import Banner from "./components/Banner/Banner";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  
AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });

  return (
    <div>
      <div className="h-[700px] relative">
        <video
        autoPlay
        loop
        muted
        className=" absolute right-0 top-0 h-[700px] w-full object-cover z-[1]">
          <source src={BgVideo} type="video/mp4"/>
        </video>
        <Navbar></Navbar>
        <Hero></Hero>
      </div>
      <div>
      <Services></Services>
      <Banner/>
      <Banner2 />
      <Footer/>
      </div>
    </div>
  )
}

export default App