import React from 'react'
import style from "./Footer.module.css"
import { FaHouseUser} from "react-icons/fa";
import { VscBellDot } from "react-icons/vsc";
import { FaSistrix } from "react-icons/fa";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
function Footer() {

  return (
    <div className={style.wrapper}>
      <FaHouseUser />
       <FaSistrix/>
      < VscBellDot />
      <ChatBubbleOutlineIcon />
    </div>
  )
}

export default Footer