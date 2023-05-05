import { Button, Input } from "antd";
import styled from "styled-components";
import { InputProps } from "antd/es/input";
import { ButtonProps } from "antd/es/button";
import { Link, LinkProps } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  background-color: #122206;
`;

export const InputS = styled(Input)<InputProps>`
  && {
    //position: absolute;
    border-radius: 1rem;
    width: 19.16vw;
    height: 5.82vh;

    //left: 2.91vw;
    //top: ${(props) => (props.name === "login" ? "7.15vh" : "16vh")};

    background-color: #d9d9d9;

    font-size: 1.2rem;

    @media (max-width: 75rem) {
      //width: 29.16vw;
      height: 5.82vh;

      //top: ${(props) => (props.name === "login" ? "7.15vh" : "15.22vh")};
    }

    @media (max-width: 62rem) {
      width: 66.16vw;
      height: 5.82vh;

      //top: ${(props) => (props.name === "login" ? "7.15vh" : "15.22vh")};
    }
  }
`;

export const InputRegisterS = styled(Input)<InputProps>`
  && {
    //position: absolute;
    border-radius: 1rem;
    //width: 19.16vw;
    //height: 5.82vh;

    //left: 2.91vw;
    //top: ${(props) => (props.name === "login" ? "7.15vh" : "16vh")};

    background-color: #d9d9d9;

    font-size: 1.2rem;

    @media (max-width: 75rem) {
      //width: 29.16vw;
      height: 5.82vh;

      //top: ${(props) => (props.name === "login" ? "7.15vh" : "15.22vh")};
    }

    @media (max-width: 62rem) {
      width: 66.16vw;
      height: 5.82vh;

      //top: ${(props) => (props.name === "login" ? "7.15vh" : "15.22vh")};
    }
  }
`;
export const BoxLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  width: 24.1vw;
  height: 39.31vh;
  left: 25vw;
  top: 30.28vh;

  background: #b4b4b4;
  border-radius: 1rem;

  z-index: 1;

  @media (max-width: 62rem) {
    width: 72.1vw;
    height: 39.31vh;
    left: 14vw;
  }
`;

export const BoxRegister = styled.div`
 
  position: absolute;
  width: 35vw;
  height: 40vh;

  background: #b4b4b4;
  border-radius: 1rem;

  z-index: 1;

  @media (max-width: 62rem) {
    width: 72.1vw;
    height: 39.31vh;
    left: 14vw;
  }
`;

export const ButtonS = styled(Button)<ButtonProps>`
  //position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 19.16vw;
  height: 5.82vh;
  //left: 2.85vw;
  //top: 26.07vh;
  
  background: #0cbaba;
  border-radius: 1rem;

  border: none;

  font-size: 1.2rem;
  
  @media (max-width: 75rem) {
    //width: 29.16vw;
    height: 5.15vh;
    //top: 23.07vh;
  }

  @media (max-width: 62rem) {
    width: 66.16vw;
    height: 5.15vh;
    //top: 23.07vh;
  }

  
`;

export const ButtonRegisterS = styled(Button)<ButtonProps>`
  //position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 32.5vw;
  height: 5.82vh;
  //left: 2.85vw;
  //top: 26.07vh;
  
  background: #0cbaba;
  border-radius: 1rem;

  border: none;

  font-size: 1.2rem;
  
  @media (max-width: 75rem) {
    //width: 29.16vw;
    height: 5.15vh;
    //top: 23.07vh;
  }

  @media (max-width: 62rem) {
    width: 66.16vw;
    height: 5.15vh;
    //top: 23.07vh;
  }

  
`;

export const BoxImg = styled.div`
  position: absolute;
  width: 54.37vw;
  height: 74.02vh;
  left: 40vw;
  top: 11.77vh;

  border-radius: 1rem;
  background: #b4b4b4;
  background-image: url("login.png");
  background-size: 46.875vw 94.63vh;
  background-position: right;
  background-repeat: no-repeat;


  @media (max-width: 75rem) {
    background-size: 34.875vw 66.63vh;
  }
  
  @media (max-width: 62rem) {
    display: none;
  }

`;

export const DivButtons = styled.div`
  a{
    margin-top: 1.05vh;
    float: right;
  }
`

export {};
