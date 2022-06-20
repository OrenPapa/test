import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import StorageService from "../Helpers/StorageService";
import { UploadImageIcon } from "../Icons/UploadIcon";
import { setUserData } from "../Redux/UserSlice";
import "../Styles/main.scss";

function RegistrationCard() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [image, setImage] = useState<any>(null);
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageError, setImageError] = useState<any>(null);
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let validationSuccess: boolean = false;

  const onFormValidation = () => {
    if (name.length === 0) {
      setNameError("This field is required");
      validationSuccess = false;
    } else {
      setNameError("");
      validationSuccess = true;
    }
    if (surname.length === 0) {
      setSurnameError("This field is required");
      validationSuccess = false;
    } else {
      setSurnameError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
    if (email.length === 0) {
      setEmailError("This field is required");
      validationSuccess = false;
    } else {
      setEmailError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
    if (address.length === 0) {
      setAddressError("This field is required");
      validationSuccess = false;
    } else {
      setAddressError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
    if (password.length === 0) {
      setPasswordError("This field is required");
      validationSuccess = false;
    } else {
      setPasswordError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
    if (confirmPassword.length === 0) {
      setConfirmPasswordError("This field is required");
      validationSuccess = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords don't match");
      validationSuccess = false;
    } else {
      setConfirmPasswordError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
    if (image === null) {
      setImageError("Adding a photo is required");
      validationSuccess = false;
    } else {
      setImageError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
  };

  const onNavigationToLogin = () => {
    Navigate("/login");
  };

  const onPhotoChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.addEventListener("load", () => {
        setImage(URL.createObjectURL(files[0]));
      });
    }
  };

  const onFormSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onFormValidation();

    if (validationSuccess) {
      dispatch(setUserData({ name, surname, email, address, image, password }));
      StorageService.setItem(
        "user",
        StorageService.stringify({
          name,
          surname,
          email,
          address,
          image,
          password,
        })
      );
      Navigate("/login");
    }
  };

  return (
    <div className="registration-card">
      <form onSubmit={onFormSubmit} className="registration-card__content">
        <div className="registration-card__double-input-container ">
          <div className="registration-card__input-container">
            <div className="registration-card__samll-text">Name</div>
            <input
              className="registration-card__small-input"
              type="text"
              placeholder={"Name"}
              value={name}
              name="Name"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value)
              }
            />
            <div
              className={`registration-card__error-text ${
                nameError?.length === 0 &&
                "registration-card__error-text--visibility-none"
              }`}
            >
              {nameError?.length !== 0 && nameError}
            </div>
          </div>
          <div className="registration-card__input-container">
            <div className="registration-card__samll-text">Surname</div>
            <input
              className="registration-card__small-input"
              type="text"
              placeholder={"Surname"}
              value={surname}
              name="Surname"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setSurname(event.target.value)
              }
            />
            <div
              className={`registration-card__error-text ${
                surnameError?.length === 0 &&
                "registration-card__error-text--visibility-none"
              }`}
            >
              {surnameError?.length !== 0 && surnameError}
            </div>
          </div>
        </div>
        <div className="registration-card__input-container">
          <div className="registration-card__samll-text">Email</div>
          <input
            className="registration-card__large-input"
            type="email"
            placeholder={"Email"}
            value={email}
            name="Email"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value)
            }
          />
          <div
            className={`registration-card__error-text ${
              emailError?.length === 0 &&
              "registration-card__error-text--visibility-none"
            }`}
          >
            {emailError?.length !== 0 && emailError}
          </div>
        </div>
        <div className="registration-card__input-container">
          <div className="registration-card__samll-text">Address</div>
          <input
            className="registration-card__large-input"
            type="text"
            placeholder={"Address"}
            value={address}
            name="Address"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setAddress(event.target.value)
            }
          />
          <div
            className={`registration-card__error-text ${
              addressError?.length === 0 &&
              "registration-card__error-text--visibility-none"
            }`}
          >
            {addressError?.length !== 0 && addressError}
          </div>
        </div>
        <div className="registration-card__input-container">
          <div className="registration-card__samll-text">Password</div>
          <input
            className="registration-card__large-input"
            type="password"
            placeholder={"Password"}
            value={password}
            name="Password"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value)
            }
          />
          <div
            className={`registration-card__error-text ${
              password?.length === 0 &&
              "registration-card__error-text--visibility-none"
            }`}
          >
            {passwordError?.length !== 0 && passwordError}
          </div>
        </div>
        <div className="registration-card__input-container">
          <div className="registration-card__samll-text">Confirm Password</div>
          <input
            className="registration-card__large-input"
            type="password"
            placeholder={"Confirm password"}
            value={confirmPassword}
            name="ConfirmPassword"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setConfirmPassword(event.target.value)
            }
          />
          <div
            className={`registration-card__error-text
             ${
               confirmPasswordError?.length === 0 &&
               "registration-card__error-text--visibility-none"
             }`}
          >
            {confirmPasswordError?.length !== 0 && confirmPasswordError}
          </div>
        </div>

        <div className="registration-card__image-input-container">
          <UploadImageIcon />
          <input
            onChange={onPhotoChange}
            type="file"
            className="registration-card__image-input"
          />
        </div>

        <div
          className={`registration-card__error-text
             ${
               imageError?.length === 0 &&
               "registration-card__error-text--visibility-none"
             }`}
        >
          {imageError?.length !== 0 && imageError}
        </div>

        <div className="registration-card__button-container">
          <div
            className="registration-card__link"
            onClick={onNavigationToLogin}
          >
            Login
          </div>
          <button type="submit" className="registration-card__button">
            Join
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrationCard;
