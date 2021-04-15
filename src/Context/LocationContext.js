import React, { createContext, useState } from "react";
import defaultLocationlist from "./LocationListdefault";

export const LocationListProvider = createContext();
export const LocationContext = (props) => {
  const [locationSearchresults, setLocationsearchResults] = useState(
    defaultLocationlist
  );
  return (
    <LocationListProvider.Provider
      value={[locationSearchresults, setLocationsearchResults]}
    >
      {props.children}
    </LocationListProvider.Provider>
  );
};
