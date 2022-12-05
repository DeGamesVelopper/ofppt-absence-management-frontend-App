import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../../store/actions/authActions";

import Input from "../Controls/CustomInput/";

import "./login.css";

function Login() {
  //local states
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");

  //redux states
  const isloading = useSelector(state => state.auth.isloading);
  const islogin = useSelector(state => state.auth.islogin);
  const dispatch = useDispatch();

  const tryLogin = () => {
    if (username && pwd) dispatch(login(username, pwd));
  };

  return islogin ? (
    <Redirect to="/" />
  ) : (
    <div className="login  flex_column">
      <form
        className="login__Form  flex_column"
        onSubmit={e => e.preventDefault()}
      >
        <div>
          <h1 className="login__title"> Log In </h1>
        </div>
        <Input
          className="login__input"
          placeholder="username"
          value={username}
          setValue={setUsername}
        />
        <Input
          className="login__input"
          placeholder="password"
          value={pwd}
          setValue={setPwd}
          type="password"
        />
        <button className="login__btn" onClick={() => tryLogin()}>
          <span className="login__btn__txt"> Login </span>
          {isloading ? (
            <img
              className="login__loading"
              src="images/Login_loading.svg"
              alt="loginSvg"
            />
          ) : null}
        </button>
      </form>
    </div>
  );
}

export default Login;
