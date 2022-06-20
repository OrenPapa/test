import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/main.scss";
import { Icon } from "@iconify/react";
import { useSelector } from "react-redux";
import { RootState } from "../Redux/Store";
import { useDispatch } from "react-redux";
import { setAuthenticationStatus } from "../Redux/AuthenticationSlice";

function Navbar() {
  const Navigate = useNavigate();
  const userData = useSelector((state: RootState) => state.userSlice);
  const [isDropdownOpen, setIsDropsownOpen] = useState(false);
  const dispatch = useDispatch();

  const onNavigationHome = () => {
    Navigate("/home");
  };

  const onNavigationtoCart = () => {
    Navigate("/cart");
  };

  const onNavigationToEditProfile = () => {
    Navigate("/edit-profile");
  };

  const onLogout = () => {
    dispatch(setAuthenticationStatus(false));
    Navigate("/login");
  };

  return (
    <div className="navbar">
      <div className="navbar__left-panel">
        <div onClick={onNavigationHome} className="navbar__menu-item">
          Home
        </div>
        <div className="navbar__menu-item">Contact us</div>
        <div className="navbar__menu-item">About us</div>
      </div>
      <div className="navbar__right-panel">
        <div onClick={() => setIsDropsownOpen(!isDropdownOpen)}>
          <img className="navbar__image" src={userData?.image} alt="profile" />
          {isDropdownOpen && (
            <div className="navbar__dropdown">
              <div
                className="navbar__dropdown-item"
                onClick={onNavigationToEditProfile}
              >
                Edit Profile
              </div>
              <div
                onClick={onLogout}
                className="navbar__dropdown-item navbar__dropdown-item--color-red"
              >
                Log out
              </div>
            </div>
          )}
        </div>

        <div onClick={onNavigationtoCart} className="navbar__icon">
          <Icon
            icon="clarity:shopping-cart-line"
            color="white"
            width="40"
            height="40"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
