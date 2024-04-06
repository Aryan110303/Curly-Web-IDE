import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Who from "./components/Who"

const App = () => {
  return (
    <>

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
