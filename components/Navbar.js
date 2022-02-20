import React, { useState } from "react";
import Link from "next/link";
import { useEthers } from "@usedapp/core";
import { notifyNetwork } from "../toast";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const { account, activateBrowserWallet, deactivate } = useEthers();
  //   constructor() {
  //     super();
  //     this.state = {
  //       sticky: false,
  //     };
  //   }

  //   componentDidMount() {
  //     window.addEventListener("scroll", this.handleScroll);

  //     //Mobile Menu
  //     this.mobileMenu();
  //   }

  //   componentWillUnmount() {
  //     window.removeEventListener("scroll", this.handleScroll);
  //   }

  const handleScroll = () => {
    if (window.scrollY > 70) {
      this.setState({
        sticky: true,
      });
    } else if (window.scrollY < 70) {
      this.setState({
        sticky: false,
      });
    }
  };

  const onError = () => {
    notifyNetwork();
  };

  const mobileMenu = () => {
    //Mobile Menu Toggle
    let mobileNavContainer = document.querySelector(".mobile-nav__container");
    let mainNavContent = document.querySelector(
      ".main-nav__main-navigation"
    ).innerHTML;
    mobileNavContainer.innerHTML = mainNavContent;

    document
      .querySelector(".side-menu__toggler")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.toggle("active");
        e.preventDefault();
      });

    //Close Mobile Menu
    document
      .querySelector(".side-menu__close-btn")
      .addEventListener("click", function (e) {
        document.querySelector(".side-menu__block").classList.remove("active");
        e.preventDefault();
      });
  };

  return (
    <div>
      <header className="main-nav__header-one ">
        <nav
          className={
            sticky
              ? "header-navigation stricky stricked-menu stricky-fixed"
              : "header-navigation stricky"
          }
        >
          <div className="container">
            <div className="main-nav__logo-box">
              <a
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 30,
                }}
                href="/"
                className="main-nav__logo"
              >
                Human Time Cry
              </a>
              <a href="#" className="side-menu__toggler">
                <i className="fa fa-bars"></i>
              </a>
            </div>
            <div className="main-nav__main-navigation">
              <ul className="one-page-scroll-menu main-nav__navigation-box">
                <li className="current scrollToLink">
                  <a href="/"></a>
                </li>
              </ul>
            </div>
            <div className="main-nav__right">
              {account ? (
                <a
                  style={{ cursor: "pointer", color: "#c1c1c1" }}
                  onClick={deactivate}
                  className="thm-btn header__btn scroll-to-target"
                >
                  Disconnect
                </a>
              ) : (
                <a
                  style={{ cursor: "pointer", color: "#c1c1c1" }}
                  onClick={() => activateBrowserWallet(onError)}
                  className="thm-btn header__btn scroll-to-target"
                >
                  Connect
                </a>
              )}
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
