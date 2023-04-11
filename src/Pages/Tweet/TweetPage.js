import React from 'react'
import MenuItems from '../../Components/Sections/Left/MenuItems'
import style from './Tweetpage.module.css'
import TweetPost from '../../Components/Sections/ProfileSection/TweetPost'
import RightSide from '../../Components/Sections/Right/RightSide'
function TweetPage() {
  return (
    <div>
        <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
     <TweetPost /> 
      </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
    </div>
  )
}

export default TweetPage