import React, { useEffect ,useState} from "react";
import MenuItems from "../../Components/Sections/Left/MenuItems";
import style from "./Home.module.css";
import { useRecoilValue } from "recoil";
import RightSide from "../../Components/Sections/Right/RightSide";
import MiddleContainer from "../../Components/Sections/Middle/MiddleContainer";
import { isLoginAtom } from "../../Recoil/Atom1/Atom";
import { useNavigate } from "react-router-dom";
// import Navbar from "../../Components/Navbar/Navbar";/
import Footer from "../../Atom/Footer/Footer";

import DialogBox from "../../Components/Dialog/DialogBox";
function Home() {
  const isUserLoggedIn = useRecoilValue(isLoginAtom);
  const nevigate = useNavigate();
 

  useEffect(() => {
    if (!isUserLoggedIn) {
      nevigate("/");
    }
  });

  return (
    <div className={style.Main}>
      <div className={style.container}>
        <MenuItems />
      </div>
      <div className={style.middleContainer}>
        <MiddleContainer />  
      </div> 
      <div className={style.floatIcon}>
      <DialogBox />
      </div>
 
      <div className={style.footer}>
          <Footer />
        </div>
      <div className={style.rightContainer}>
        <RightSide />
      </div>
    </div>
  );
}

export default Home;