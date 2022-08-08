import axios from "axios";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import {
  IdInput,
  InputTitle,
  LoginInputDiv,
  LoginTitle,
  PasswordInput,
  LoginDiv,
  LoginWrap,
  LoginSection,
} from "../styles/User/SginUpStyles";

const SignUp = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };
  const onChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onChangeNickname = (e) => {
    setNickname(e.target.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onClickSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/accounts/signup", {
        username: name,
        password: password,
        nickname: nickname,
        age: age,
        email: email,
      })
      .then((res) => {
        console.log("success");
        setIsLoggedIn(true);
        redirectHome();
      })
      .catch((e) => {
        console.log(e);
        alert("이미 존재하는 회원입니다.");
      });
  };

  return (
    <LoginSection>
      <LoginWrap>
        <LoginDiv>
          <LoginTitle>Sign Up</LoginTitle>
          <LoginInputDiv>
            <InputTitle>Name</InputTitle>
            <IdInput placeholder="Enter Your Name..." onChange={onChangeName} />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>age</InputTitle>
            <IdInput placeholder="Enter Your Age..." onChange={onChangeAge} />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>NickName</InputTitle>
            <IdInput placeholder="Create Name..." onChange={onChangeNickname} />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Email</InputTitle>
            <IdInput placeholder="Enter Email..." onChange={onChangeEmail} />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Password</InputTitle>
            <PasswordInput
              placeholder="Create password..."
              type="password"
              onChange={onChangePassword}
            />
            <Button
              variant="secondary"
              size="sm"
              style={{ width: "250px", marginTop: "25px" }}
              onClick={onClickSubmit}
            >
              Submit
            </Button>
          </LoginInputDiv>
        </LoginDiv>
      </LoginWrap>
    </LoginSection>
  );
};

export default SignUp;
