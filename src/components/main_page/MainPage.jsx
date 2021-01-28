import React from "react";
import Menu from "../menu/Menu";
import Orders from "../orders/Orders";

function MainPage() {
  return (
    <div>
      <div className="row">
        <div className="col-md-8">
          <Menu />
        </div>
        <div className="col-md-4">
          <Orders />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
