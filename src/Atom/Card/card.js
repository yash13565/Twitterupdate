import React, { useState } from 'react'
import style from "./card.module.css"
import { useSetRecoilState } from "recoil";
import DialogBox from '../../Components/Dialog/DialogBox';
import { Button, Popover } from "antd";
import { isLoginAtom } from '../../Recoil/Atom1/Atom';
function Card(props) {
  const setLoginStatus = useSetRecoilState(isLoginAtom);
  
  const [open, setOpen] = useState(false);

  const handleOpenChange = (newOpen) => {
    setOpen(newOpen);
  };
  function HandaleLogOut() {
    let text = 'Do You Logout ! \nEither Ok or Cancel';
      if(window.confirm (text) == true){
          setLoginStatus(false);
    alert("successfully Logout");
      } else {
        text = " Cancel"
      }
  }
  return (
<div className={style.textColor}>
   
          <Popover
    
    content={<a onClick={HandaleLogOut}>   Logout</a>}
    title={
      <div style={{ color: "#fff", display: "flex", alignItems: "center" }}>
        This trend is harmful or
      </div>
    }
    trigger="click"
    open={props.open}
    overlayInnerStyle={{
      color: "#fff",
      background: "black",
      
      boxShadow: "0 0 10px #6A6F74",
    }}
    onOpenChange={handleOpenChange}
      >
      <div onClick={props.button} className={style.btn2container}>
    <div>
        {props.picture}
    </div>
    <div className={style.btn2text}>
      {props.text}
      <br />
      {props.text2}
    </div>
        <Button className={style.btn}>...</Button>
        </div>
  </Popover>
  </div>
);
  
}

export default Card