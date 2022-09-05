// * Komponen dan Hooks dari React
import React, { useState } from "react";

// * Import fungsi Hooks menggunakan Redux Thunk
import { useDispatch, useSelector } from "react-redux";

// * Import file authLogin
import { authLoginApi } from "../store/features/auth/authSlice";

function AuthLoginForm() {
  // * useSelector sebagai Getter
  const authState = useSelector((state) => state.auth);
  // * useDispatch sebagai Setter
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  // * doSubmit digunakan sebagai action form
  const doSubmit = (e) => {
    e.preventDefault();
    dispatch(authLoginApi({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <div className="form-section">
      <form name="loginForm" onSubmit={doSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={emailChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              onChange={passwordChange}
              value={password}
            />
          </div>

          <input type="submit" value="Login" />

          <div className="message">
            {authState.isLoginPending && (
              <div>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/c/c7/Loading_2.gif?20170503175831"
                  alt="loading"
                />
              </div>
            )}
            {authState.isLoginSuccess && <div>Success!</div>}
            <br />
            {authState.errorMessage && <div>{authState.errorMessage}</div>}
          </div>
        </div>
      </form>
    </div>
  );
}

export default AuthLoginForm;
