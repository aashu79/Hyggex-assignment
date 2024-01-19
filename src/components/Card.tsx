
import "./style.css"
import down from "../assets/down.png";
import { useState } from "react";

interface Header{
  header: string;
}

const Card = (props: Header) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [isRotated, setIsRotated] = useState<boolean>(false);
  const {header} = props;
  return (
    <div className="text-container w-84 p-3 rounded-xl flex-col flex">
       <div className="flex justify-between "> <p>{header}</p>
        <img src={down} className="w-6 h-6" alt="" style={{
          transform: isRotated ? 'rotate(180deg)' : 'rotate(0deg)'
        }} onClick={()=>{
            setIsExpanded(!isExpanded);
            setIsRotated(!isRotated); //
        }}/></div>
        <p className="mt-1" style={{
            maxHeight: isExpanded ? '70px' : "0",
            overflow: "hidden",
            
          }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          perspiciatis laboriosam iure placeat. Praesentium hic alias neque,
          ipsa labore rerum soluta suscipit nemo veritatis saepe. Eum sunt hic
          veritatis odit?
        </p>
        
      
      </div>
  )
}

export default Card