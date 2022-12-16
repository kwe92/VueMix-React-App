import "./App.css";
import NavBar from "./components/NavBar";
import Movies from "./components/Movies";
import { useState } from "react";

const App = (props) => {
  // TODO: Extract into its own custom hook to keep code DRY
  const [isLightMode, setIsLightMode] = useState(true);

  const modeHandler = (mode) => {
    setIsLightMode(mode);
  };

  return (
    <div
      className="App"
      style={{
        //TODO: Change background color based on mode light or dark
        backgroundColor: !isLightMode && "#121212",
        position: "absolute",
        left: 0,
        width: "100%",
        height: "auto",
      }}
    >
      <NavBar getMode={modeHandler} />
      {/* <Movies></Movies> */}
    </div>
  );
};

export default App;
