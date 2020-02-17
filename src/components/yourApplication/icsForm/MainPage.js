import React, { useEffect, useState } from "react";
import "./IcsStyle.css";
import FirstPage from "./Pages/FirstPage";
import SecondPage from "./Pages/SecondPage";
import ThirdPage from "./Pages/ThirdPage";
import FourthPage from "./Pages/FourthPage";
import FifthPage from "./Pages/FifthPage";
import SixthPage from "./Pages/SixthPage";
import EighthPage from "./Pages/EighthPage";
import NinthPage from "./Pages/NinthPage";
import TenthPage from "./Pages/TenthPage";
import EleventhPage from "./Pages/EleventhPage";
import TwelfthPage from "./Pages/TwelfthPage";
import ThirteenthPage from "./Pages/ThirteenthPage";
import FourteenthPage from "./Pages/FourteenthPage";
import FifteenthPage from "./Pages/FifteenthPage";
import SixteenthPage from "./Pages/SixteenthPage";
import SeventeenthPage from "./Pages/SeventeenthPage";
import EighteenthPage from "./Pages/EighteenthPage";
import NineteenthPage from "./Pages/NineteenthPage";
import TwentiethPage from "./Pages/TwentiethPage";
import TopPage from "../../../assets/MainPage.PNG";

function MainPage() {
  const [appState, setAppState] = useState("null");
  useEffect(() => {
    fetch(
      "https://switchroo.herokuapp.com/detailsYouNeed/getDetails/5e39849559c07b2328110439"
    )
      .then(res => res.json())
      .then(data => setAppState(data));
  }, []);
  return appState ? (
    <div className="App text-xs text-gray-800 text-xs">
      {appState => console.log(appState)}
      <div className="top-page">
        <img src={TopPage} alt="Top Page" />
      </div>
      <FirstPage appData={appState} setState={setAppState} />
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
  ) : (
    <div>Loading</div>
  );
}

export default MainPage;
