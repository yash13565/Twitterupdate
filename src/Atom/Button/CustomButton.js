import React from "react";
// import style from "../styled.module.css";

function CustomButton({ type, buttonText, icon, btnNext, customCss, pitcher,disable}) {
  return (
    <button type={type} className={customCss} disabled={disable} onClick={btnNext}>
      {icon}
      {buttonText}
      {pitcher}
    </button>
  );
}

export default CustomButton;
