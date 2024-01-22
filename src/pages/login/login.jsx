import React from "react";
import classes from "./login.module.css";
import laptopImage from "../../constants/image 1.svg";
import hash from "../../constants/hash.svg";
const Login = () => {
  return (
    <>
      <div className={classes.loginContainer}>
        <div className={classes.loginContent}>
          <div className={classes.loginForm}>
            <div className={classes.title}>
              <p>Arcane </p>
              <img src={hash} alt="hash" />
            </div>
            <div>
              <input type="email" placeholder="enter mail" />
              <input type="password" placeholder="enter pass" />
            </div>
          </div>
          <div className={classes.loginImage}>
            <img src={laptopImage} alt="laptop-img" className={classes.image} />
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
