import React, { useEffect, useState } from "react";
import DragDropList from "./DragDropList";
import LoginPan from "./../Login/LoginPan";
import axios from "axios";

function TodoPan() {
  const [user, setUser] = useState(null);

  const [default_items, setDefault_items] = useState([
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing",
      checked: true,
    },
    { text: "1", checked: false },
  ]);

  const [activeTab, setActiveTab] = useState(1);

  const handleLoginMode = (tabNum) => {
    setActiveTab(tabNum);
  };

  const login = async (params) => {
    const body = {
      username: params.username,
      password: params.password,
    };

    const { data } = await axios.post("/api/auth/login", body);

    console.log(data.tasks);

    setDefault_items(data.tasks);

    setUser(data.username);
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    console.log("changed");
  }, []);

  return (
    <div className="flex flex-col items-center">
      <div className="tabs">
        <a
          className={"tab tab-lifted " + (activeTab == 1 && "tab-active")}
          onClick={() => handleLoginMode(1)}
        >
          Tasks
        </a>
        <a
          className={"tab tab-lifted " + (activeTab == 2 && "tab-active")}
          onClick={() => handleLoginMode(2)}
        >
          Login
        </a>
      </div>
      <div className="weatherCard card text-neutral-content shadow-xl w-auto">
        {activeTab == 2 ? (
          <LoginPan user={user} login={login} logout={logout} />
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
