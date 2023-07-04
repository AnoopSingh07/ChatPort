import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Robot from "../assets/robot.gif";
import Logout from "./Logout";
export default function Welcome() {
  const [userName, setUserName] = useState("");
  useEffect(async () => {
    setUserName(
      await JSON.parse(
        localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
      ).username
    );
  }, []);
  return (
    <Container>
      <div className="welcomeLogout">
      <Logout />
      </div>
      <img className="robot" src={Robot} alt="" />
      <h1>
        Welcome, <span>{userName}!</span>
      </h1>
      <h3>Please select a chat to Start messaging.</h3>
    </Container>
  );
}

const Container = styled.div`
  .welcomeLogout{
    top: 10%;
    right: 9%;
    position: absolute;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  flex-direction: column;
  img {
    height: 20rem;
  }
  span {
    color: #07bcf5;
    text-shadow: 2px 1px 3px blue;
  }
  .robot{
    height: 20rem;
    padding: 14px 14px;
    margin: 22px 5px;
    border-radius: 61px;  
    box-shadow: 2px 2px 5px 2px blue;
  }
  h1,h3{
    text-shadow: 1px 0px 1px #07bcf5;
  }
`;