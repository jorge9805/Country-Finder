import React from "react";
import LoadSpinnerCSS from "./Styles/LoadSpinner.module.css";
const LoadSpinner = () => {
  return (
    <div className={LoadSpinnerCSS.lds_ripple}>
      <div></div>
      <div></div>
    </div>
  );
};

export default LoadSpinner;
