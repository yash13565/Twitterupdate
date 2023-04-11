import React from 'react'
import MenuItems from '../../Components/Sections/Left/MenuItems'
import style from './TweetPage.module.css'
import Tweetpost from '../../Components/Sections/ProfileSection/Tweetpost'
import RightSide from '../../Components/Sections/Right/RightSide'
function TweetPage() {
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

export default TweetPage