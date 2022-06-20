import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setAuthenticationStatus } from "../Redux/AuthenticationSlice";
import { RootState } from "../Redux/Store";
import "../Styles/main.scss";

function LoginCard() {
  const userData = useSelector((state: RootState) => state.userSlice);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let validationSuccess: boolean = false;

  const loginValidation = () => {
    if (email.length === 0) {
      setEmailError("This field is required");
      validationSuccess = false;
    } else if (email !== userData.email) {
      setEmailError("This Email is not Registred");
      validationSuccess = false;
    } else {
      setEmailError("");
      validationSuccess = true;
    }
    if (password.length === 0) {
      setPasswordError("This field is required");
      validationSuccess = false;
    }
    if (password !== userData.password) {
      setPasswordError("Password is wrong");
      validationSuccess = false;
    } else {
      setPasswordError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
  };

  const onNavigationToRegistration = () => {
    Navigate("/");
  };

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    loginValidation();
    if (validationSuccess) {
      dispatch(setAuthenticationStatus(true));
      Navigate("/home");
    }
  };

  return (
    <div className="login-card">
      <form onSubmit={onFormSubmit} className="login-card__content">
        <div className="login-card__title">
          <div className="login-card__divider" />
          Login
          <div className="login-card__divider" />
        </div>
        <div className="login-card__input-container">
          <div className="login-card__small-text">Email</div>
          <input
            className="login-card__input"
            type="email"
            placeholder={"Email"}
            value={email}
            name="Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <div
            className={`login-card__error-text
             ${
               emailError?.length === 0 &&
               "login-card__error-text--visibility-none"
             }`}
          >
            {emailError?.length !== 0 && emailError}
          </div>
        </div>
        <div className="login-card__input-container">
          <div className="login-card__small-text">Password</div>
          <input
            className="login-card__input"
            type="password"
            placeholder={"Password"}
            value={password}
            name="Password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <div
            className={`login-card__error-text
             ${
               passwordError?.length === 0 &&
               "login-card__error-text--visibility-none"
             }`}
          >
            {passwordError?.length !== 0 && passwordError}
          </div>
        </div>
        <div className="login-card__signup-container">
          <div className="login-card__text">Don't have an account yet?</div>
          <div
            onClick={onNavigationToRegistration}
            className="login-card__link"
          >
            Register
          </div>
        </div>
        <div className="login-card__button-container">
          <button type="submit" className="login-card__button">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginCard;
