import Home from "./Home";
import Navbar from "./Navbar";
import bgImage from "../assets/images/—Pngtree—ppt dark technology style background_941359.jpg";

const Background = () => {
  return (
    <div
  className="App relative overflow-hidden flex h-screen bg-cover bg-center "
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
>
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Navbar */}
      <Navbar />

      {/* Home Component */}
      <div className="relative z-10">
        <Home />
      </div>
    </div>
  );
};

export default Background;
