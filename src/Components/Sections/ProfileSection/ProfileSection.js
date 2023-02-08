import React from "react";
import style from "./ProfileSection.module.css";
import UserTweet from "./UserTweet/UserTweet";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import { forLocalStorageIndex} from "../../../Recoil/Atom1/Atom"
import { useRecoilValue } from "recoil";
import { VscCalendar } from "react-icons/vsc";


function ProfileSection() {
   const nevigate = useNavigate();
   const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)

  
  let Data = JSON.parse(localStorage.getItem("user"));
  
  //console.log(Data.length)
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/Home") }><WestIcon /></p>
        <h2>{Data[getLocalStorageIndex].Name}</h2>
      </div>
        <img className={style.container} alt="img" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/640px-Image_created_with_a_mobile_phone.png" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            alt="img"
            src="https://tinypng.com/images/social/website.jpg"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>
      

<div key={Data.id} className={style.textcontaint}>
        <h2>{`${Data[getLocalStorageIndex].Name}`}</h2>
        <h4 style={{color:'silver'}}>{`${Data[getLocalStorageIndex].Email}`}</h4>
        <h5 style={{marginTop:'1rem',fontSize:'1.2rem'}}>Sexy isn't a shape it's an attitude</h5>
        <h5 style={{color:'silver',marginTop:'1rem',fontSize:'1rem',paddingBottom:'0.5rem'}}><VscCalendar/>Joined March 2022</h5>
      <div  className={style.followerscont}> 1000<span  className={style.followers}> Followers</span> 10 <span className={style.followers}>Following</span></div> 
      </div>
    
    </div>
    <UserTweet />
   
    </>
  );
}

export default ProfileSection;
