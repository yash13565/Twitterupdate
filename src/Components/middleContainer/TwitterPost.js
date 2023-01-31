import React from "react";
import style from "./TwitterPost.module.css";
import { Avatar } from "@mui/material";
import { tweetPosts } from "../../ConstData/ConstData";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import SyncIcon from "@mui/icons-material/Sync";
import PollIcon from "@mui/icons-material/Poll";
import UploadIcon from "@mui/icons-material/Upload";
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState,useEffect } from "react";
import { useRecoilState } from "recoil";
import { isTweetPost ,userProfile} from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";
import LikeComponant from "../LikeCompanent/LikeCompanent";

export default function TwitterPost() {
  const[post,setPost]=useState(tweetPosts)
  const nevigate = useNavigate();
  const[newPost,setNewPost] = useRecoilState(isTweetPost);
  const[newProfile,setNewProfile] = useRecoilState(userProfile);
 useEffect(() => {
  fetchData()
  
  },[newPost]);

function  fetchData()
  {
    setPost(tweetPosts)
  } 
 function xyz (dataName)  {
    setNewProfile(dataName)
    nevigate("/Profile2")
  };

  return (
    <>
      {post.map((data) => {
        return (
          <div className={style.wrapper}>
            <div className={style.container1}>
              <div  onClick={ ()=>xyz(({
                name  : data.name,
                handlerName : data.handlerName  ,
                organization : data.organization,
                tweetText : data.tweetText,
                tweetPic : data.tweetPic,
                tweets: data.tweets,
                tweetCount : data.tweetCount,
                retweetCount : data.retweetCount,
                likesCount : data.likesCount,
                viewsCount : data.viewsCount,
                followers : data.followers,
                followings : data.followings,
                
              } )) } >
              
                <Avatar   className={style.avatar} src={data.tweetPic} />
               
              </div>

              <div className={style.innercontainer}>
                <span className={style.text}>
                  <h3>{data.name}<VerifiedIcon style={{color:"blue"}}/></h3>
                  
                </span>
                <h4>{data.handlerName}</h4>
                <h4>{data.tweetText}</h4>
              </div>
            </div>

            <div className={style.img}>
              <img
                style={{ width: "30rem", height: "30rem",borderRadius:"15px" }}
                alt="picture"
                src={data.tweetPic}
              />
            </div>
            <div className={style.icons}>
                  <span>
                    {data.tweetCount}
                    <ChatBubbleOutlineIcon />
                  </span>
                  <span>
                    {data.retweetCount}
                    <SyncIcon />
                  </span>
                  <span>
                   <LikeComponant/>
                  </span>
                  <span>
                    {data.viewsCount}
                    <PollIcon />
                  </span>

                  <UploadIcon />
                </div>
          </div>
        );
      })}

    </>
  );
}
