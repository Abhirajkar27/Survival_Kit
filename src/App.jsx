import "./App.css";
import { useState } from 'react';
import MainPage from "./Pages/MainPage/MainPage";
import LandingSurv from "./Pages/Landing/LandingSK";



function App() {
  const [gameIndex, setIndex] = useState(null);
  // const [activityId, setActivityId] = useState('');

  let content;
  switch (gameIndex) {
    case 0:
      content = <MainPage onClose={() => { setIndex(null); }} onforw={() => { setIndex(1); }} />;
      break;
    default:
      content = <LandingSurv onNext={() => { setIndex(0); }} />;
  }
  return (
    <>{content}</>
  );
}

export default App;