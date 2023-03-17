import React, { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Username</span>
        </label>
        <input
          type="text"
          placeholder="email"
          class="input input-bordered"
          value={username}
          onChange={usernameHandler}
        />
      </div>
      <div class="form-control">
        <label class="label">
          <span class="label-text">Password</span>
        </label>
        <input
          type="text"
          placeholder="password"
          class="input input-bordered"
          value={password}
          onChange={passwordHandler}
        />
      </div>
      <div class="form-control mt-6">
        <button
          class="btn btn-primary"
          onClick={() => props.login({ username, password })}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
