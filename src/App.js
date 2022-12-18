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
        //TODO: Change lignt mode to a . different color maybe a olive green or soft green
        // this line is needed to cover screen when filtering
        backgroundColor: !isLightMode && "#121212",
        position: "absolute",
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <NavBar getMode={modeHandler} />
      {/* <Movies></Movies> */}
    </div>
  );
};

export default App;
