import React, { useState } from "react";
import { Avatar } from "@mui/material";
import style from "./RightContainer2.module.css";
import CustomButton from "../../../Atom/Button/CustomButton";
import VerifiedIcon from '@mui/icons-material/Verified';

function Righthomebox2() {
  const handleClick = (id) => {
    const updatedFollowContainer = followContainer.map((item) => {
      if (item.id === id) {
        item.followed = !item.followed;
      }
      return item;
    });
    setFollowContainer(updatedFollowContainer);
  };
  const [followContainer, setFollowContainer] = useState([
    {
      id: 1,
      tag: <i className="far fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4Dz0hVXb8Bc7IM6SpzZkEf6VfFsriOu9oPg&usqp=CAU",
      text: "Sky",
      text2: "sky@gmail.com",
    },
    {
      id: 2,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_NQ6CH3GSZZziyy9UcvVGlhxP8XSptflRwQ&usqp=CAU",
      text: "Malvika",
      text2: "malvika@gmail.com",
    },
    {
      id: 3,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://www.pinkvilla.com/imageresize/ala_vaikunthapurramloo_box_office_collection_allu_arjun_starrer_continues_its_strong_run_main_.jpg?width=752&t=pvorg",
      text: "Pushpa",
      text2: "Allu@gmail.com",
    },
    {
      id: 4,
      tag: <i className="fa fa-solid fa-badge-check"></i>,
      src: "https://pbs.twimg.com/profile_images/1565187838303383553/GhjYyIsG_400x400.jpg",
      text: "Akshay",
      text2: "akshay@gmail.com",
    },
  ]);
  return (
    <div className={style.container}>
      <h1>Who to follow</h1>
      <div className={style.main}>
        {followContainer.map((menu) => {
          return (
            <div className={style.wrapper}>
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
        {/* <div className={style.btn2}>
          <CustomButton
            className={style.btn2}
            buttonText={"see more"}
            btnNext={() => alert("see more things")}
          />
        </div> */}
      </div>
    </div>
  );
}

export default Righthomebox2;
