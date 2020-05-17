import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./custom.css";

import Header from "./components/header";
import ListData from "./components/listData";

const element = (
  <React.Fragment>
    <Header />
    <div className="container">
      <ListData />
    </div>
  </React.Fragment>
);

ReactDOM.render(element, document.getElementById("root"));
