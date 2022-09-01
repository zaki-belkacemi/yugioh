import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {updateAuth} from "../stores/authStore";
import { useDispatch } from "react-redux";


export const Login = (props) => {
  let [username, setUsername] = useState("");
  let [password, setpassword] = useState("");
  let navigate = useNavigate();
  let dispatch=useDispatch();
  function login() {
    if (username === "zaki" && password === "passcode") {
        dispatch(updateAuth(true))
      navigate("/search");
    }
  }

  return (
    <div className="logini">
    <div className="logincard">
      <h2 className="heading2">welcome to YU-Gi-Oh</h2>
      <div className="login">
        <input
          className="input"
          placeholder="Username"
          type="text"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <input
          className="input"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(event) => {
            setpassword(event.target.value);
          }}
        />
        <button
          className="button"
          onClick={() => {
            login();
          }}
        >
          LOGIN{" "}
        </button>
      </div>
    </div>
    </div>
  );
};
