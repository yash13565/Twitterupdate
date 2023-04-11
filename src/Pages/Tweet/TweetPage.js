import React from 'react'
import MenuItems from "../../Components/Sections/Left/MenuItems"
import RightSide from '../../Components/Sections/Right/RightSide'
import Tweetpost from '../../Components/Sections/ProfileSection/Tweetpost'
import style from "./Tweetpage.module.css"
function Tweetpage() {
  return (
    <div>
          <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
     <Tweetpost /> 
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
    </div>
  )
}

export default Tweetpage