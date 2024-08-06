import React, { useState } from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Counter from "../counter/Counter";
import OuterCounter from "../counter2/OuterCounter";
import Products from "../products/Products";
import Inputs from "../controlledInputs/Inputs";
import Light from "../light/Light";
import Images from "../image/Images";
import Mails from "../mail/Mails";

export default function Dashboard() {
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
    {
      id: 5,
      title: "Lights",
      app: <Light />,
    },
    {
      id: 6,
      title: "Images",
      app: <Images />,
    },
    {
      id: 7,
      title: "Mail",
      app: <Mails />,
    },
  ];

  const [selectedTitle, setSelectedTitle] = useState(details?.[0]);

  return (
    <div className="dashboard">
      <Sidebar details={details} changeApp={changeApp} />
      <Content selectedTitle={selectedTitle} />
    </div>
  );
}
