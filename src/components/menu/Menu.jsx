import React from "react";
import Soups from "./Soups";
import Salads from "./Salads";
import Entries from "./Entries";

function Menu() {
  return (
    <div>
      <Salads />
      <Soups />
      <Entries />
    </div>
  );
}

export default Menu;
