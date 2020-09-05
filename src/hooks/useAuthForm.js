import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  authorizeUser,
  SET_SESSION_ERROR,
  SET_USER_SESSION,
} from "../actions/authActions";
import { getSignupUser, getLoginUser } from "../services/authServices";

const useAuthForm = (type) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const authFunction = type === "signup" ? getSignupUser : getLoginUser;

    return dispatch(
      authorizeUser({ email, username, password }, authFunction)
    ).then((res) => {
      if (res.type === SET_SESSION_ERROR) {
        throw new Error("Signup/Login Unsuccessful");
      } else {
        console.log(res);
        console.log("Logged In!");
        // window.location.href = "./cards";
      }
    });
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    username,
    setUsername,
    handleSubmit,
  };
};

export default useAuthForm;
