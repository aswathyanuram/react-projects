import React, { useState } from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Counter from "../counter/Counter";
import OuterCounter from "../counter2/OuterCounter";
import Products from "../products/Products";
import Inputs from "../controlledInputs/Inputs";

export default function Dashboard() {
  const [selectedTitle, setSelectedTitle] = useState([]);

  const changeApp = (title) => {
    setSelectedTitle(title);
  };

  const details = [
    {
      id: 1,
      title: "Counter",
      app: <Counter />,
    },
    {
      id: 2,
      title: "Controlled Counter",
      app: <OuterCounter />,
    },
    {
      id: 3,
      title: "Products",
      app: <Products />,
    },
    {
      id: 4,
      title: "Controlled Inputs",
      app: <Inputs />,
    },
  ];
  return (
    <div className="dashboard">
      <Sidebar details={details} changeApp={changeApp} />
      <Content selectedTitle={selectedTitle} />
    </div>
  );
}
