import React from "react";
import style from "./ProfileSection.module.css";
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import UserTweet from "./UserTweet/UserTweet";
function ProfileSection() {
   const nevigate = useNavigate();

  
  let Data = JSON.parse(localStorage.getItem("user0"));
 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon style={{cursor:'pointer'}}/></p>
        <h2>{Data.Name}</h2>
      </div>
        <img className={style.container} src="https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg" />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>

      <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${Data.Name}`}</h4>
        <h5>{`${Data.Email}`}</h5>
        {/* <h5>{`${"Mob no:-"}${Data.Phone}`}</h5> */}
        <h5>followers :- 2000</h5>
        <h5>likesCount :- 154 likes</h5>
      </div>
    </div>
    <UserTweet/>
    </>
  );
}

export default ProfileSection;
