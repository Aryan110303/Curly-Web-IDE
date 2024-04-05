import { moon } from "../assets";
import Button from "./Button";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Hero = () => {
  return (
    <div className="hero mt-10">
      <video
        height={80}
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
        <h1
          className="font-thunder text-8xl uppercase tracking-wide mt-6 ml-15"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          A Planeterium Space
        </h1>
        <h1
          className="font-thunder text-8xl uppercase tracking-wide text-right mr-15 mt-[17rem]"
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-anchor-placement="top top"
        >
          for developers
        </h1>
      </div>
      <Button className=" " href="">
        START NOW!
      </Button>
    </div>
  );
};

export default Hero;
