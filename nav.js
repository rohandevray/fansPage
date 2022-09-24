import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCreditCard,
  faPerson,
  faBell,
  faMagnifyingGlass,
  faCircleUser,
  faWallet,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import {} from "@fortawesome/free-brands-svg-icons";

function Nav() {
  return (
    <NavBar>
      <Logo>
        <FontAwesomeIcon icon={faHeart} size="2x" color="skyblue" id="left" />
        <h1>LovelyFans</h1>
      </Logo>
      <Text>
        <h1>Home</h1>
        <h1>Wallet</h1>
        <h1>Features</h1>
        <h1>Accounts</h1>
        <h1>Creators</h1>
      </Text>
      <Profile>
        <FontAwesomeIcon icon={faBell} size="3x" color="skyblue" id="right" />
        <FontAwesomeIcon
          icon={faCircleUser}
          size="3x"
          color="skyblue"
          id="right"
        />
      </Profile>
    </NavBar>
  );
}

const NavBar = styled.div`
  /* background-color: yellow; */
  font-size: 4rem;
  height: 15vh;
  display: flex;
  padding: 2% 10%;
  justify-content: space-between;
  .bar {
    /* background-color: red; */
    width: 100rem;
    display: flex;
    .xyz {
      position: absolute;
      left: 35%;
      top: 6%;
    }
    input {
      height: 12rem;
      width: 100%;
      font-size: 10rem;
      ::placeholder {
        padding-left: 15%;
      }
    }
  }
`;

const Text = styled.div`
  background-color: red;
  display: flex;
  font-size: 2.8rem;
  h1 {
    padding-right: 10rem;
  }
`;

const Logo = styled.div`
  background-color: blue;
  display: flex;
  h1 {
    margin-left: 1rem;
    font-weight: 800;
  }
  #left {
    position: relative;
    top: 2rem;
  }
`;

const Profile = styled.div`
  background-color: red;
  #right {
    padding-right: 5rem;
  }
`;

export default Nav;
