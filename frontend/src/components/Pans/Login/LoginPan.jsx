import React from "react";
import Profile from "./Profile";
import Login from "./Login";

function LoginPan({ user, login, logout }) {
  return (
    <div class="card flex-shrink-0 p-7 w-[350px] max-h-[400px] max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        {user ? (
          <Profile user={user} logout={logout} />
        ) : (
          <Login login={login} />
        )}
      </div>
    </div>
  );
}

export default LoginPan;
