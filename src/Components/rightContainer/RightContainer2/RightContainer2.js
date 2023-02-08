import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from '@mui/icons-material/Verified';

function Righthomebox2() {
  // const [ show , setShow]= useState(false)
 
  const [followContainer, setFollowContainer] = useState([
    
    {
      id: 1,
      tag: <i className="far fa-solid fa-badge-check"></i>,
      src: "https://4kwallpapers.com/images/wallpapers/kakashi-hatake-naruto-amoled-black-background-artwork-1179x2556-6484.jpg",
      text: "Kakashi",
      text2: "kakashi@gmail.com",
    },
    {
      id: 2,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://rukminim1.flixcart.com/image/416/416/ky90scw0/poster/m/6/4/medium-redcloud-goku-ultra-instinct-wall-poster-for-room-for-original-imagagedrzjxskyj.jpeg?q=70",
      text: "Goku",
      text2: "Goku@gmail.com",
    },
    {
      id: 3,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://w0.peakpx.com/wallpaper/10/665/HD-wallpaper-malavika-sharma-malavika-sharma-red-tollywood.jpg",
      text: "Malvika",
      text2: "malvika@gmail.com",
    },
    {
      id: 4,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQD0pQ3wmb1sN5Cr_jkBwN9lrHWp0FKdiCzw&usqp=CAU",
      text: "Ketika",
      text2: "Ketika@gmail.com",
    },
    {
      id: 5,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://www.pinkvilla.com/imageresize/akhil_akkineni_would_love_to_play_virat_kohli_0.jpg?width=752&t=pvorg",
      text: "Akhil",
      text2: "akhil@gmail.com",
    },
    {
      id: 6,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://images.indianexpress.com/2022/09/bumrah.jpg",
      text: "Jasprit",
      text2: "Jsprit@gmail.com",
    },
  ]);
  const [trending , setTrendings] = useState(followContainer.slice(0,4))
  const [isShowingAllTrendings , setIsShowingAllTrendings] = useState(false)

  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };

  // handle seeAll request
  function handleRequestSeeAll () {
      setIsShowingAllTrendings(!isShowingAllTrendings)
      if(isShowingAllTrendings) {
         return setTrendings(followContainer.slice(0,4))
      }
      setTrendings(followContainer)
  }
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {trending.map((menu,id) => {
          return (
            <div key={id} className={style.wrapper}>
              <Avatar alt="Remy Sharp" src={menu.src} />
              <div className={style.img}>
                <h3>
                  {menu.text}
                  <span style={{ color: "blue" }}> {menu.tag} </span><VerifiedIcon style={{color:"blue",fontSize:"20px"}}/>
                </h3>
                <h6>{menu.text2}</h6>
              </div>
              <div className={style.btntxt}>
                <CustomButton
                  buttonText={menu.followed ? "Following" : "Follow"}
                  btnNext={() => handleClick(menu.id)}
                  key={menu.id}
                  customCss={style.follwButton}
                  disabled={menu.followed}
                />
              </div>
            </div>
          );
        })}
        <div className={style.btn2}>
          <CustomButton
            customCss={style.btn2}
            buttonText=   {isShowingAllTrendings ? 'Show Less' : 'Show More'}
            btnNext={handleRequestSeeAll}
          />
        </div>
      </div>
    </div>
  );
}


export default Righthomebox2;
