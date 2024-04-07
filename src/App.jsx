import ButtonGradient from "./assets/svg/ButtonGradient";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import Header from "./components/Header";
import Hero from "./components/Hero";
import Who from "./components/Who"
import Script from "./components/Script"

const App = () => {
  return (
    <>
      <Script />
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Who />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
