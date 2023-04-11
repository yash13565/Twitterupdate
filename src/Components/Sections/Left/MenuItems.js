import React from "react";
import { useState } from "react";
import { FaTwitter } from "react-icons/fa";
import { FaHouseUser, FaHashtag} from "react-icons/fa";
// import { GrNotification } from "react-icons/gr";
import { BsBookmark, BsPerson } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { TbFileText } from "react-icons/tb";
import { CgMoreO } from "react-icons/cg";
import CustomButton from "../../../Atom/Button/CustomButton";
import Tweet from "../../../Atom/Tweet/Tweet";
import style from "./MenuItem.module.css";
import Dialog from "@mui/material/Dialog";
import { VscBellDot } from "react-icons/vsc";
import { Avatar } from "@mui/material";
// import CustomButton2 from "../../../Atom/Button/CustomButton2";
import { useNavigate } from "react-router-dom";
import {forLocalStorageIndex} from "../../../Recoil/Atom1/Atom"
import { useRecoilValue } from "recoil";
import Dialog2 from "../../Dialog2/Dialog2";
// import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import Card from "../../../Atom/Card/card";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';



function LeftSec() {
  const nevigate = useNavigate();
  let Data = JSON.parse(localStorage.getItem("user"));
  const getLocalStorageIndex=useRecoilValue(forLocalStorageIndex)
  console.log( getLocalStorageIndex)
  
  const menu = [
    { id: 1, icon: <p onClick={()=> nevigate("/Home") }><FaHouseUser /></p> , Name: <p onClick={()=> nevigate("/Home") }>Home</p> },
    { id: 2, icon: <FaHashtag />, Name: "Explore" },
    { id: 3, icon: <VscBellDot />, Name: "Notifications" },
    { id: 4, icon: <HiOutlineMail />, Name: "Message" },
    { id: 5, icon: <BsBookmark />, Name: "Bookmarks" },
    { id: 6, icon: <TbFileText />, Name: "Lists" },
    { id: 7, icon: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }><BsPerson /></p>, Name: <p onClick={()=> nevigate( `/Profile/${paramsValue}`) }>Profile</p> },
    { id: 8, icon: <CgMoreO />, Name: "More" },
  ];
  const [isOpen, SetisOpen] = useState(false);
  const handleClickOpen = () => {
    SetisOpen(true);
  };
  const handleClose = () => {
    SetisOpen(false);
  };

 
 
  var paramsValue=Data[getLocalStorageIndex]?.Name
  return (
    <>
      <div className={style.container}>
        <div className={style.innerContainer}>
          <div className={style.innerContainer2}>
            <div className={style.logo}>
             
              <p onClick={()=> nevigate("/Home") }> <FaTwitter /></p>
            </div>

            {menu.map((menu,index) => {
              return (
                <div className={style.sidebar} key={index}>
                  <div className={style.sidebarOption} >
                    <h2>{menu.icon}</h2>
                    <span>{menu.Name}</span>
                  </div>
                </div>
              );
            })}
            <CustomButton
              buttonText="Tweet"
              customCss={style.sidebar__tweet}
              btnNext={handleClickOpen}
            />
                <span className={style.floatIcon}>  <Fab onClick={handleClickOpen} color="primary" aria-label="add">
                  <AddIcon />
                   </Fab></span>

            <div className={style.Dialog}>
              <Dialog
                open={!!isOpen}
                onClose={handleClose}
                style={{
                  background: "rgba(91, 112, 131, 0.4)",
                  fontSize: "15px",
                  lineHeight: "40px",
                }}
                className={style.fullScreenDialog}
              >
                <Tweet onClick={handleClose}/>
              </Dialog>
            </div>
          </div>
          <div >
            <Card
              picture={
                <Avatar
                  alt="Remy Sharp"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgBhcplevwUKGRs1P-Ps8Mwf2wOwnW_R_JIA&usqp=CAU"
                />
              }
              text={Data[getLocalStorageIndex].Name}
              text2={Data[getLocalStorageIndex].Email}
              customCss={style.button2}
            />
           
          </div>
        </div>
      </div>
    </>
  );
}
export default LeftSec;