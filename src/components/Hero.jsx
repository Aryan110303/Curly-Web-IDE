import { moon } from "../assets";
import { hero } from "../constants";
import Button2 from "./Button2";

const Hero = () => {

  return (
    <div className="hero mt-10 " id="hero">
      <div className="video-container flex items-center justify-center">
      <video
        width={800}
        className="hero-moon  absolute top-[9rem] z-10"
        muted
        autoPlay
        repeat='true'
        playsInline
        data-aos="zoom-in"
        data-aos-delay="1000"
        data-aos-anchor-placement="top top"
      >
        <source src={moon} type="video/mp4" />
      </video>
      </div>
      <div className="hero-content ">
        {hero.map((item) => (
            <h1 key={item.id} className={item.class} data-aos={item.transition} data-aos-delay={item.delay} data-aos-anchor-placement="top top">{item.text}</h1>
            ))}
      </div>
      <div className="scroll flex justify-center mb-10 translate-y-[-1rem]">
      <Button2 className="button-primary transition-transform hover:translate-y-1 flex justify-center" href="#about">
      <i className="fa fa-arrow-down"></i>
      </Button2>
      </div>
    </div>
  );
};

export default Hero;
