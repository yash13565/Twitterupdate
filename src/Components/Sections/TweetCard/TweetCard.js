import React from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PushPinIcon from '@mui/icons-material/PushPin';
import { useNavigate } from 'react-router-dom';
function TweetCard() {
  const navigate=useNavigate()
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