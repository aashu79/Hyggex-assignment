import "./style.css";
import bulb from "../assets/bulb.png";
import sound from "../assets/sound.png";
import { useState } from "react";
import reload from "../assets/reload.png"
import right from "../assets/right.png"
import left from "../assets/left.png"
import zoom from "../assets/zoom.png"
const Hero = () => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div>
      <h1 className="text-blue-900 mt-7 ml-14 text-3xl font-bold">
        Realtions And Functions(Mathematics)
      </h1>
      {/* hero nav */}
      <div className="flex w-1/3 my-10 font-semibold text-xl mx-auto gap-8">
        <p className="border-b-2	border-blue-950">Study</p>
        <p className="text-gray-500">Quiz</p>
        <p className="text-gray-500">Test</p>
        <p className="text-gray-500">Game</p>
        <p className="text-gray-500">Others</p>
      </div>

      {/* Hero Card */}

      <div className=" w-72 h-48 card-container flex flex-col  mx-auto gap-4">
        
          <div
            className={`card-inner ${isFlipped ? "is-flipped" : ""}`}
            onClick={() => {
              setIsFlipped(!isFlipped);
            }}
          >
            {/* card 1 */}
            <div className=" mx-auto card-front flex flex-col justify-between text-white p-10 ">
              <div className="icon-container flex justify-between">
                <img src={bulb} className="w-7" alt="" />
                <img src={sound} className="w-7" alt="" />
              </div>
              <h1 className="text-4xl font-semibold m-auto">9+6+7x-2x-3</h1>
            </div>

            {/* /card 2 */}

            <div className=" mx-auto card-back flex flex-col justify-between text-white p-10 ">
              <div className="icon-container flex justify-between">
                <img src={bulb} className="w-7" alt="" />
                <img src={sound} className="w-7" alt="" />
              </div>
              <h1 className="text-4xl font-semibold m-auto">5x+2</h1>
            </div>
          </div>
        

          <div className="controller flex justify-between items-center m-3 p-1">
            <img src={reload} className="w-7 h-7" alt="" />
            <div className="mid-cont flex gap-4 items-center">
              <img src={left} alt="" />
              <h1 className="text-lg font-bold">01/10</h1>
              <img src={right} alt="" />
            </div>
            <img src={zoom} className="w-7 h-7" alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
