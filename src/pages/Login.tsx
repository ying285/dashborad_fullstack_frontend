import React from "react";
import "../styles/signUp.scss";
import Button from "../utils/Button";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Input from "../utils/Input";
import axios from "axios";
import { authActions } from "../store/auth";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const enteredEmail = useSelector((state: RootState) => state.auth.email);

  const enteredPassword = useSelector(
    (state: RootState) => state.auth.password
  );

  const progress = useSelector((state: RootState) => state.auth.progress);

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.getemail(e.target.value));
  };
  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.getpassword(e.target.value));
  };

  const getTokenHandler = async () => {
    try {
      const res = await axios.post("http://localhost:8003/user/login", {
        email: enteredEmail,
        password: enteredPassword,
      });

      localStorage.setItem("token", res.data.token);
      dispatch(authActions.getToken());
      navigate("/home");
    } catch (err) {
      console.log(err);
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    getTokenHandler();
  };

  const progrssHandler1 = () => {
    dispatch(authActions.setProgress(0));
  };

  const progrssHandler2 = () => {
    dispatch(authActions.setProgress(100));
  };

  return (
    <div>
      <LoadingBar
        color="#f11946"
        progress={progress}
        shadow={true}
        height={4}
        onLoaderFinished={progrssHandler1}
      />

      <div className="authMain">
        <form className="authMain__form" onSubmit={submitHandler}>
          <h3>Login</h3>

          <Input
            name="email"
            htmlfor="email"
            type="email"
            label="Your Email"
            placeholder="e.g john@example.com"
            value=""
            onChange={emailHandler}
          />
          <Input
            name="password"
            htmlfor="password"
            type="password"
            label="Your Password"
            placeholder="********"
            value=""
            onChange={passwordHandler}
          />

          <p>
            <Link to="/signup" className="authMain_link">
              Switch to Sign Up
            </Link>
          </p>

          <Button onClick={progrssHandler2} children="logga in"></Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
