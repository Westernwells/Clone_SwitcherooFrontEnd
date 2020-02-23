import React, { useContext } from "react";
const AppContext = React.createContext();
const useAppContext = () => useContext(AppContext);
export { AppContext, useAppContext };
