import React from "react";
import "./Locationslist.css";
import Locations from "../../Response format/locationres.json";

export const Locationlist = () => {
  return Locations.map((items) => (
    <div className="locationlist">
      <button>
        <p>
          {items.formatted}
          {items.flag}
        </p>
      </button>
    </div>
  ));
};
