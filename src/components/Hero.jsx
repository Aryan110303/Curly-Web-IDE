import { moon } from "../assets";
import { hero } from "../constants";
import Button2 from "./Button2";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
  return (
    <div className="hero mt-10">
      <video
        width={800}
        className="hero-moon absolute left-[15.5rem] top-[9rem] z-10"
        muted
        autoPlay
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-anchor-placement="top top"
      >
        <source src={moon} type="video/mp4" />
      </video>
      <div className="hero-content">
        {hero.map((item) => (
            <h1 key={item.id} className={item.class} data-aos={item.transition} data-aos-delay={item.delay} data-aos-anchor-placement="top top">{item.text}</h1>
            ))}
      </div>
      <Button2 className="button-primary ml-[37.5rem] transition-transform hover:translate-y-1" href="#about">
      <i className="fa fa-arrow-down"></i>
      </Button2>
    </div>
  );
};

export default Hero;
