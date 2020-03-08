import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Reducers from "./Reducers/index";
import { persistStore } from "redux-persist";

let store = createStore(Reducers, composeWithDevTools(applyMiddleware(thunk)));
let persistor = persistStore(store);
export { store, persistor };
