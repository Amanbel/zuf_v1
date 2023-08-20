import React from "react";
import "./custom-button.styles.scss";

function CustomButton({ children, ...otherProps }) {
  return (
    <button className={"custom_btn"} {...otherProps}>
      {children}
    </button>
  );
}

export default CustomButton;
