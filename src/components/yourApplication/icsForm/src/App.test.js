import React, { useEffect, useState } from "react";
import "./IcsFormStyle.css";
// import "./tailwind.css";
// import "./index.css";
import { AppContext } from "./components/AppContext";
import FirstPage from "./components/FirstPage";
import SecondPage from "./components/SecondPage";
import ThirdPage from "./components/ThirdPage";
import FourthPage from "./components/FourthPage";
import FifthPage from "./components/FifthPage";
import SixthPage from "./components/SixthPage";
import EighthPage from "./components/EighthPage";
import NinthPage from "./components/NinthPage";
import TenthPage from "./components/TenthPage";
import EleventhPage from "./components/EleventhPage";
import TwelfthPage from "./components/TwelfthPage";
import ThirteenthPage from "./components/ThirteenthPage";
import FourteenthPage from "./components/FourteenthPage";
import FifteenthPage from "./components/FifteenthPage";
import SixteenthPage from "./components/SixteenthPage";
import SeventeenthPage from "./components/SeventeenthPage";
import EighteenthPage from "./components/EighteenthPage";
import NineteenthPage from "./components/NineteenthPage";
import TwentiethPage from "./components/TwentiethPage";
import TopPage from "./images/MainPage.PNG";

function App() {
  const [appState, setAppState] = useState(null);
  useEffect(() => {
    fetch(
      "https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e39814edbebc641e42ebefa"
    )
      .then(res => res.json())
      .then(data => setAppState(data));
  }, []);
  return appState ? (
    <AppContext.Provider value={{ appState, setAppState }}>
      <div className="App ics-form  text-gray-800 ">
        <div className="top-page">
          <img src={TopPage} alt="Top Page" />
        </div>
        <FirstPage />
        <SecondPage />
        <ThirdPage />
        <FourthPage />
        <FifthPage />
        <SixthPage />
        <EighthPage />
        <NinthPage />
        <TenthPage />
        <EleventhPage />
        <TwelfthPage />
        <ThirteenthPage />
        <FourteenthPage />
        <FifteenthPage />
        <SixteenthPage />
        <SeventeenthPage />
        <EighteenthPage />
        <NineteenthPage />
        <TwentiethPage />
      </div>
    </AppContext.Provider>
  ) : (
    <div className="text-white mt-10 text-4xl font-bold">Loading</div>
  );
}

export default App;
