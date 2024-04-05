import { profile } from "../assets";
import Button from "./Button";

const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <Button className=" " href="#login">
        Join Us!
      </Button>
    </div>
  );
};

export default Hero;
