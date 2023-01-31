import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import React, { useState } from "react";
import style from './Like.module.css'

const LikeComponant = () => {
  const [likeCount, setLikeCount] = useState(123);
  const [color, setColor] = useState("purple");
  const [activeBtn, setActiveBtn] = useState("none");
  


  const handleLikeClick = () => {
    if (activeBtn === "none") {
        
      setLikeCount(likeCount + 1);
      setActiveBtn("like");
     if ( likeCount=== 123 ){
        setColor("red")
        
     }
      else {
        setColor("purple")
      }
      return
    }
 
    if (activeBtn === 'like'){
        
      setLikeCount(likeCount - 1);
      setActiveBtn("none");
      if ( likeCount=== 123 ){
        setColor("red")
        
     }
      else {
        setColor("purple")
      }
      return;
    }
  };

  return (
    <>
    
      <div >
       <button
       id={style.likebtn}
       style={{color}}
      onClick={handleLikeClick}
    >
        < FavoriteBorderIcon />
      
      {likeCount}
    </button>
        
       

      </div>
    </>
  );
};

export default LikeComponant;
