import bgbanner from "../assets/images/new_banner_img-removebg-preview.png"
import "../Styles/Home.css";
import Buttons from "./Buttons";

const Home = () => {
  return (
    <div className="background py-8 md:ml-8" >
        <div className=" flex  items-center justify-center md:ml-64"> 
          <img src={bgbanner} alt="Banner" className="Banner mt-24 h-54 w-full items-center justify-center md:ml-64" />
         
        </div>
        
        <Buttons />
    </div>
  )
}

export default Home
