import { moon } from "../assets";
import { hero } from "../constants";
import Button2 from "./Button2";

const Hero = () => {

  return (
    <div className="hero md:mt-[4rem] lg:mt-[4rem] xl:mt-[2.5rem]" id="hero">
      <div className="video-container flex items-center justify-center">
        <div className="absolute left-1/2 -translate-x-1/2 top-[22rem] -translate-y-1/2">
      <img
        width={800}
        src={moon}
        className="hero-moon z-10"
        playsInline
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-anchor-placement="top top"
      />
      </div>
      </div>
      <div className="hero-content ">
        {hero.map((item) => (
            <h1 key={item.id} className={item.class} data-aos={item.transition} data-aos-delay={item.delay} data-aos-anchor-placement="top top">{item.text}</h1>
            ))}
      </div>
      <div className="scroll flex justify-center mb-10 translate-y-[1rem]">
      <Button2 className="button-primary transition-transform hover:translate-y-1 flex justify-center" href="#about">
      <i className="fa fa-arrow-down"></i>
      </Button2>
      </div>
    </div>
  );
};

export default Hero;
