import React, { useState } from "react";
import { NavBarItem, navbarList } from "../../utils/data";
import { LogoIcon } from "../Common/Icons";
import Logo from "../../assets/images/logo.svg";
import "./Header.scss";

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);

  console.log(showSideBar);

  const handleShowSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <header className="header w-100 bg-black position-fixed top-0">
      <div className="header__inner d-flex justify-content-between">
        <div className="header__inner-logo">
          <img src={Logo} alt="" className="w-100" />
        </div>
        <div className="header__inner-navbar text-white">
          <div className="navbar-inner d-flex w-100">
            {navbarList.map((item, idx) => {
              switch (item) {
                case NavBarItem.Seperator:
                  return <div key={idx} className="vertical-line"></div>;
                default:
                  return (
                    <div
                      key={item}
                      className="navbar-inner__item text-uppercase"
                    >
                      {item}
                    </div>
                  );
              }
            })}
          </div>
        </div>

        <div className="navbar-mobile text-white">
          <div onClick={handleShowSideBar}>☰</div>
        </div>
        <div
          className={`text-white ${
            showSideBar ? "show-sidebar sidebar" : "sidebar"
          }`}
        >
          <div className="sidebar__inner h-100 p-4">
            <div className="sidebar__inner-header d-flex justify-content-between">
              <div className="sidebar-close-btn" onClick={handleShowSideBar}>
                X
              </div>
              <div className="sidebar-logo">
                <img className="w-100" src={Logo} alt="" />
              </div>
            </div>
            <div className="sidebar__inner-body w-75 mx-auto mt-4">
              {navbarList.map((item, idx) => {
                switch (item) {
                  case NavBarItem.Seperator:
                    return <div key={idx} className="horizontal-line my-3"></div>;
                  default:
                    return (
                      <div
                        key={item}
                        className="navbar-inner__item p-2 text-uppercase"
                      >
                        {item}
                      </div>
                    );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
