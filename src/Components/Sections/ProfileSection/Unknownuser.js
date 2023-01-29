import React from "react";
import style from "./ProfileSection.module.css";
// import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import WestIcon from "@mui/icons-material/West";
import CustomButton from "../../../Atom/Button/CustomButton";
import { useNavigate } from "react-router-dom";
import {userProfile} from "../../../Recoil/Atom1/Atom";
// import { useRecoilState } from "recoil";
import { useRecoilValue } from "recoil";
import { Avatar } from "@mui/material";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import style2 from "./Unknownuser.module.css"

function ProfileSection() {
   const nevigate = useNavigate();
   const unknownProfileData=useRecoilValue(userProfile)
   const tweets = unknownProfileData.tweets
 

 
  return (
    <>
    <div className={style.wrapper}>
      <div className={style.feed__header}>
        <p onClick={()=> nevigate("/") }><WestIcon /></p>
        <h2>{unknownProfileData.name}</h2>
      </div>
        <img className={style.container} src={unknownProfileData.tweetPic} />
      <div>
        <span className={style.Avatarsection}>
          <img
            className={style.img}
            src = {unknownProfileData.tweetPic}/>
        
         
          <CustomButton customCss={style.btn} buttonText={"Edit profile"} />
        </span>
      </div>
     <div className={style.textcontaint}>
        <h4>{`${"Name:-"}${unknownProfileData.name}`}</h4>
        <h5>{`${"@"}${unknownProfileData.handlerName}`}</h5>
        <h5>{`${"tweetCount:-"}${unknownProfileData.tweetCount}`}</h5>
        <h5>{`${"likescount:-"}${unknownProfileData.likesCount}`}</h5>
        <h5>{`${"followers:-"}${unknownProfileData.followers}`}</h5>
         <h5>{`${"followings:-"}${unknownProfileData.followings}`}</h5>
  </div>
    </div>
 <div>
 {tweets && tweets.length > 0
              ? tweets.map((x) => {
        return (
          <>
           {/* tweetText : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ',
                tweetPic : 'https://lh3.googleusercontent.com/8ygpNx4Er1H9LmB-D8W7cBi-qsvcDSDlWw2CVIk5bHFM77q6a46V0GNxSzopAUtvLKIApDTW7RKnrJ7m7Yp4obN1s23V3dRMrYLwvz5GJc_gu1N-M8tGkyhFYGf40nwZCg7jbgGa1g=w1920-h1080',
                tweetCount : 100,
                retweetCount : 100 ,
                likesCount : 100,
                viewsCount : '102k', */}
            <div key={x.id}>
     

            <div className={style2.wrapper}>
            <div className={style2.container1}>
              <div >
              
                <Avatar   className={style2.avatar} src={x.tweetPic} />
               
              </div>

              <div className={style2.innercontainer}>
                <span className={style2.text}>
                  <h3>{unknownProfileData.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                </span>
                <p>{x.tweetText}</p>
              </div>
            </div>

            <div className={style2.img}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="picture"
                src={x.tweetPic}
              />
            </div>
            <div className={style2.icons}>
                  <span>
                    {x.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {x.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                    {x.likesCount}
                    <FavoriteBorderIcon />
                  </span>
                  <span>
                    {x.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>


            </div>
          </>
        );
      }) :<>{alert("please wait")}</>
    }
 </div>
    </>
  );
}

export default ProfileSection;