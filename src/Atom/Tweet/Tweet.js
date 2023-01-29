import React, { useState } from "react";
import style from "./Tweet.module.css";
import { FaGlobe, FaImage, FaMapMarker } from "react-icons/fa";
import { FiCamera } from "react-icons/fi";
import { CgSmileMouthOpen } from "react-icons/cg";
import { BiUserCircle } from "react-icons/bi";
import CustomButton from "../Button/CustomButton";
import ConstData from "../../ConstData/ConstData"
import {tweetPosts} from "../../ConstData/ConstData";
import { useRecoilState } from "recoil";
import { isTweetPost } from "../../Recoil/Atom1/Atom";

function Tweet() {
  const [isOpen, setIsOpen] = useState(false);
  const [loginStatus,setLoginStatus] = useRecoilState(isTweetPost);
  const[forTrue,setForTrue]=useState(0)
  const[storeArray,setStoreArray]=useState("")
  const Icons = [
    { id: 0, icon: <FaGlobe /> },
    { id: 1, icon: <FaImage /> },
    { id: 2, icon: <FaMapMarker /> },
    { id: 3, icon: <FiCamera /> },
    { id: 4, icon: <CgSmileMouthOpen /> },
    { id: 5, icon: <BiUserCircle /> },
  ];
  function takeTweet(e)
  {
    setStoreArray(e.target.value)
    
  }
  function handleNewTweet()
  {
    setIsOpen(true);
   
    
  let newObj={

      name  : 'Profile Name',
      handlerName : '@Profile Handler' ,
      organization : 'United States government organization',
      tweetText : storeArray,
     
     
    
      tweetCount : 100,
      retweetCount : 100 ,
      likesCount : 100,
      viewsCount : '102k',
      followers : 200,
      followings : 400,
      joinedDate : '22 dec 2022'

    }
   
    tweetPosts.unshift(newObj);
   
    setForTrue(forTrue+1)
    setLoginStatus(loginStatus+1);
    
  }

  return (
    <>
      <div className={style.parentContainer}>
        <div className={style.main}>
          {/* <button onClick={Handleclose}>X</button> */}
          <div className={style.wrapper}>
            <textarea
              placeholder="What's happening?........"
              rows={8}
              cols={60}
              onChange={takeTweet}
            ></textarea>

            <div className={style.privacy}>
              <FaGlobe />
              <span>Everyone can reply</span>
            </div>

            <div className={style.bottom}>
              {Icons.map((menu) => {
                return (
                  <ul className={style.icons}>
                    <li>{menu.icon}</li>
                  </ul>
                );
              })}
            </div>
          </div>
          <CustomButton
            buttonText="Tweet"
            btnNext={handleNewTweet} 
            customCss={style.button}
          />
        </div>
      </div>
    </>
  );
}
export default Tweet;
