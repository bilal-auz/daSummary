import React, { useEffect, useState } from "react";
import DragDropList from "./DragDropList";

function TodoPan() {
  const [default_items, setDefault_items] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
  ]);

  const [loginMode, setLoginMode] = useState(false);

  const handleLoginMode = () => {
    setLoginMode(!loginMode);
  };

  useEffect(() => {
    console.log("changed");
  }, [default_items]);
  return (
    <div className="flex flex-col items-center">
      <div className="tabs">
        <a
          className={"tab tab-lifted " + (!loginMode && "tab-active")}
          onClick={handleLoginMode}
        >
          Tasks
        </a>
        <a
          className={"tab tab-lifted " + (loginMode && "tab-active")}
          onClick={handleLoginMode}
        >
          Login
        </a>
      </div>
      <div className="weatherCard card text-neutral-content shadow-xl w-auto">
        {loginMode ? (
          <div class="card flex-shrink-0 p-7 w-[350px] max-h-[400px] max-w-sm shadow-2xl bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  class="input input-bordered"
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
                />
                <label class="label">
                  <a href="#" class="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div class="form-control mt-6">
                <button class="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        ) : (
          <DragDropList
            default_items={default_items}
            setDefault_items={setDefault_items}
          />
        )}
      </div>
    </div>
  );
}

export default TodoPan;
