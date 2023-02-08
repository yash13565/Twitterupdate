import Dialog from "@mui/material/Dialog";
import CustomButton from "../../Atom/Button/CustomButton";
import profileStyle from "./Dialog.module.css";
import React from "react";
import { useSetRecoilState } from "recoil";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";


function DialogBox(props) {
  

  const setLoginStatus = useSetRecoilState(isLoginAtom);
  const { onClose, selectedValue, open } = props;
  const handleClose = () => {
    onClose(selectedValue);
  };
  function handaleClick() {
    let text = 'Do You Logout ! \nEither Ok or Cancel';
      if(window.confirm (text) == true){
          setLoginStatus(false);
    alert("successfully Logout");
      } else {
        text = " Cancel"
      }
  }
  return (
    <Dialog 
    onClose={handleClose} open={open}
    PaperProps={{
      style: {
       borderRadius: "3rem",
        width:"18em",
        
        marginTop: "32em",
        marginRight:"72em",
        borderRadius:'10px',
        padding:"0.5em",
        boxShadow:' rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;',
        backgroundColor:"black",
      },
    }}>
     
      <div className={profileStyle.headings}>
      <h4 className={profileStyle.h1}>Add an existing account</h4>
      <h4 className={profileStyle.h2} onClick={handaleClick}> Log out </h4>
      </div>
    </Dialog>
  );
}
export default DialogBox;