import "./App.css";
import { useState } from 'react';
import MainPage from "./Pages/MainPage/MainPage";
import LandingSurv from "./Pages/Landing/LandingSK";
import {SK_Provider} from'./context/context';
import SendPage from "./Pages/SendPage/SendPage";


function App() {
  const [gameIndex, setIndex] = useState(null);
  // const [activityId, setActivityId] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <MainPage onClose={() => { setIndex(null); }} onforw={() => { setIndex(1); }} />;
      break;
    case 1:
      content = <SendPage onClose={() => { setIndex(0); }} onforw={() => { setIndex(2); }} />;
      break;
    default:
      content = <LandingSurv onNext={() => { setIndex(0); }} />;
  }
  return (
    <SK_Provider>{content}</SK_Provider>
  );
}

export default App;