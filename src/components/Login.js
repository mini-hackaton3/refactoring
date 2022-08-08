import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import {
  IdInput,
  InputTitle,
  LoginInputDiv,
  LoginTitle,
  PasswordInput,
  LoginDiv,
  LoginWrap,
  LoginSection,
} from "../styles/User/LoginStyles";

import Button from "react-bootstrap/Button";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const redirectHome = () => {
    navigate("/");
  };
  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const onClickSubmit = () => {
    axios
      .post("http://127.0.0.1:8000/accounts/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        console.log("success");
        setIsLoggedIn(true);
        redirectHome();
      })
      .catch((e) => {
        console.log(e);
        alert("아이디 혹은 비밀번호가 틀렸습니다.");
      });
  };

  return (
    <LoginSection>
      <LoginWrap>
        <LoginDiv>
          <LoginTitle>Sign In</LoginTitle>
          <LoginInputDiv>
            <InputTitle>ID</InputTitle>
            <IdInput placeholder="Enter ID..." onChange={onChangeUsername} />
          </LoginInputDiv>
          <LoginInputDiv>
            <InputTitle>Password</InputTitle>
            <PasswordInput
              placeholder="Enter password..."
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

export default Login;
