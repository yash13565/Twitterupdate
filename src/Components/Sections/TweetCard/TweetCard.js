import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PushPinIcon from '@mui/icons-material/PushPin';
function TweetCard() {
  return (
    <>
    <div>
    <div>
      <ArrowBackIcon/>Tweet
    </div>
    <div><PushPinIcon/>pinned Tweet</div>
    </div>
    </>
  )
}

export default TweetCard