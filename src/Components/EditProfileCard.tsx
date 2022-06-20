import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import StorageService from "../Helpers/StorageService";
import { UploadImageIcon } from "../Icons/UploadIcon";
import { RootState } from "../Redux/Store";
import { setUserData } from "../Redux/UserSlice";

function EditProfileCard() {
  const userData = useSelector((state: RootState) => state.userSlice);
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [image, setImage] = useState<any>("");
  const [nameError, setNameError] = useState("");
  const [surnameError, setSurnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [addressError, setAddressError] = useState("");
  const [imageError, setImageError] = useState<any>(null);
  const [savedChanges, setSavedChanges] = useState(false);
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
    if (image === null) {
      setImageError("Adding a photo is required");
      validationSuccess = false;
    } else {
      setImageError("");
      validationSuccess = validationSuccess !== false ? true : false;
    }
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

  useEffect(() => {
    setName(userData.name);
    setSurname(userData.surname);
    setEmail(userData.email);
    setAddress(userData.address);
    setPassword(userData.password!);
    setImage(userData.image);
  }, [
    userData.name,
    userData.surname,
    userData.email,
    userData.address,
    userData.password,
    userData.image,
  ]);

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
      setSavedChanges(true);
    }
  };

  return (
    <div className="edit-profile-card">
      <form onSubmit={onFormSubmit} className="edit-profile-card__content">
        <div className="edit-profile-card__left-panel">
          <img className="edit-profile-card__image" src={image} alt="profile" />
          <div
            className={`edit-profile-card__error-text ${
              imageError?.length === 0 &&
              "edit-profile-card__error-text--visibility-none"
            }`}
          >
            {imageError?.length !== 0 && imageError}
          </div>
          <div className="edit-profile-card__upload-image-container">
            <UploadImageIcon />
            <input
              onChange={onPhotoChange}
              className="edit-profile-card__upload-image"
              type="file"
            />
          </div>
        </div>
        <div className="edit-profile-card__right-panel">
          <div className="edit-profile-card__double-input-container ">
            <div className="edit-profile-card__input-container">
              <div className="edit-profile-card__samll-text">Name</div>
              <input
                className="edit-profile-card__small-input"
                type="text"
                placeholder={"Name"}
                value={name}
                name="name"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setName(event.target.value)
                }
              />
              <div
                className={`edit-profile-card__error-text ${
                  nameError?.length === 0 &&
                  "edit-profile-card__error-text--visibility-none"
                }`}
              >
                {nameError?.length !== 0 && nameError}
              </div>
            </div>
            <div className="edit-profile-card__input-container">
              <div className="edit-profile-card__samll-text">Surname</div>
              <input
                className="edit-profile-card__small-input"
                type="text"
                placeholder={"Surname"}
                value={surname}
                name="surname"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                  setSurname(event.target.value)
                }
              />
              <div
                className={`edit-profile-card__error-text ${
                  surnameError?.length === 0 &&
                  "edit-profile-card__error-text--visibility-none"
                }`}
              >
                {surnameError?.length !== 0 && surnameError}
              </div>
            </div>
          </div>
          <div className="edit-profile-card__input-container">
            <div className="edit-profile-card__samll-text">Email</div>
            <input
              className="edit-profile-card__large-input"
              type="email"
              placeholder={"Email"}
              value={email}
              name="email"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(event.target.value)
              }
            />
            <div
              className={`edit-profile-card__error-text ${
                emailError?.length === 0 &&
                "edit-profile-card__error-text--visibility-none"
              }`}
            >
              {emailError?.length !== 0 && emailError}
            </div>
          </div>
          <div className="edit-profile-card__input-container">
            <div className="edit-profile-card__samll-text">Address</div>
            <input
              className="edit-profile-card__large-input"
              type="text"
              placeholder={"Address"}
              value={address}
              name="address"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setAddress(event.target.value)
              }
            />
            <div
              className={`edit-profile-card__error-text ${
                addressError?.length === 0 &&
                "edit-profile-card__error-text--visibility-none"
              }`}
            >
              {addressError?.length !== 0 && addressError}
            </div>
          </div>
          <div className="edit-profile-card__input-container">
            <div className="edit-profile-card__samll-text">Password</div>
            <input
              className="edit-profile-card__large-input"
              type="password"
              placeholder={"Password"}
              value={password}
              name="password"
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(event.target.value)
              }
            />
            <div
              className={`edit-profile-card__error-text ${
                passwordError?.length === 0 &&
                "edit-profile-card__error-text--visibility-none"
              }`}
            >
              {passwordError?.length !== 0 && passwordError}
            </div>
          </div>
          <div className="edit-profile-card__button-container">
            {savedChanges && (
              <div className="edit-profile-card__success-text">
                Saved changes
              </div>
            )}

            <button type="submit" className="edit-profile-card__button">
              Change
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default EditProfileCard;
