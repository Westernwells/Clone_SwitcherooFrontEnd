import React from "react";
import { get, set } from "object-path";
import { useAppContext } from "../components/AppContext";
const { appData, setAppData } = useAppContext();
const queryValue = ({ path }) => (get(appData, path) ? get(appData, path) : "");
const setValue = ({ path, value }) => set(appData, path, value);
setAppData({ ...appData });

export { queryValue, setValue };
