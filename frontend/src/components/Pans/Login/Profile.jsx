import React from "react";

function Profile({ user, logout }) {
  return (
    <div>
      <p>Weclome {user}</p>
      <div class="form-control mt-6">
        <button class="btn btn-primary" onClick={logout}>
          logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
