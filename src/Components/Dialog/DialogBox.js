import style from "./Dialog.module.css";
import React from "react";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";
import Tweet from "../../Atom/Tweet/Tweet";
import Dialog from "@mui/material/Dialog";
function DialogBox(props) {
  

  const [isOpen, SetisOpen] = useState(false);
  const handleClickOpen = () => {
    SetisOpen(true);
  };
 
  const handleClose = () => {
    SetisOpen(false);
  };
  return (
    <div className={style.textColor}>
     
          <span className={style.floatIcon}>  <Fab onClick={handleClickOpen} color="primary" aria-label="add">
                  <AddIcon />
                   </Fab></span>
                   <Dialog
                   className={style.dialog1}
                open={!!isOpen}
                onClose={handleClose}
                variant="outlined"
                style={{
                  background: "black",
                  fontSize: "15px",
                  lineHeight: "40px",
                }}
              >
                <Tweet onClick={handleClose}/>
              </Dialog>
     
    </div>
  );
}
export default DialogBox;