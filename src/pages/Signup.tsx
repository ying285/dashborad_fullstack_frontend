import React from "react";
import "../styles/signUp.scss";
import { Link, useNavigate } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Button from "../utils/Button";
import Input from "../utils/Input";
import axios from "axios";
import { authActions } from "../store/auth";
import { RootState } from "../store";
import { useDispatch, useSelector } from "react-redux";

const Signup = () => {
  const errors = useSelector((state: RootState) => state.auth.error);

  const emailErr = errors.filter((error: any) => error.param === "email");
  const passwordErr = errors.filter((error: any) => error.param === "password");
  const nameErr = errors.filter((error: any) => error.param === "username");

  const navigate = useNavigate();

  const dispatch = useDispatch();
  const enteredEmail = useSelector((state: RootState) => state.auth.email);
  const enteredUsername = useSelector(
    (state: RootState) => state.auth.username
  );
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
  const usernameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(authActions.getusername(e.target.value));
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("http://localhost:8003/user/signup", {
        email: enteredEmail,
        password: enteredPassword,
        username: enteredUsername,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.error === undefined) {
          navigate("/");
        } else {
          dispatch(authActions.getErrorMessage(res.data.error));
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        <form className="authMain__form" onSubmit={submitHandler} noValidate>
          <h3>Signup</h3>
          <div>
            <Input
              name="email"
              htmlfor="email"
              type="email"
              label="Your Email"
              placeholder="e.g john@example.com"
              value=""
              onChange={emailHandler}
            />
            <p
              className="text-danger text-start"
              style={{ marginTop: "-1.5rem" }}
            >
              {errors && emailErr[0]?.msg}
            </p>
          </div>
          <div>
            <Input
              name="password"
              htmlfor="password"
              type="password"
              label="Your Password"
              placeholder="********"
              value=""
              onChange={passwordHandler}
            />
            <p
              className="text-danger text-start"
              style={{ marginTop: "-1.5rem" }}
            >
              {errors && passwordErr[0]?.msg}
            </p>
          </div>
          <div>
            <Input
              name="name"
              htmlfor="name"
              type="text"
              label="Your Name"
              placeholder="e.g John"
              value=""
              onChange={usernameHandler}
            />
            <p
              className="text-danger text-start"
              style={{ marginTop: "-1.5rem" }}
            >
              {errors && nameErr[0]?.msg}
            </p>
          </div>

          <p>
            <Link to="/" className="authMain_link">
              Switch to Logga in
            </Link>
          </p>
          <Button onClick={progrssHandler2} children="Sign up"></Button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
