import React, {useContext} from "react";
import AppContext from "./AppContext";

const useAppContext = ()=>useContext(AppContext);
export default useAppContext;