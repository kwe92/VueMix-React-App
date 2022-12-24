import NavBar from "./components/NavBar";
import { StyledAppWrapper } from "./styles/styled_components/styles";
import { useEffect, useState } from "react";
import { TrailerMovies } from "./components/TrailersMovies";
import { useMode } from "./hooks/modeHook";
import { color } from "@mui/system";
const App = (props) => {
  // TODO: Extract into its own custom hook to keep code DRY
  // TODO: Finish custom app bar
  // TODO: Create a soruce of truth theme file
  // TODO: Add sign in page for google auth
  // TODO: Add Trending dropdown?

  const [isLightMode, setIsLightMode] = useMode();
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const setBodyBgColor = (color) =>
    (document.body.style.backgroundColor = color);

  // Use Vanilla JavaScript to change the color of the body to match the background
  useEffect(() => {
    isLightMode ? setBodyBgColor("white") : setBodyBgColor("#121212");
    // console.log("CORE:", ele);
  }, [isLightMode]);

  const getTitle = (title) => {
    console.log(title);
    setTitle(title);
    setShowModal(true);
  };

  const modeHandler = (mode) => setIsLightMode(mode);

  return (
    <StyledAppWrapper isLightMode={isLightMode}>
      {showModal && (
        <TrailerMovies
          title={title}
          showModal={[showModal, setShowModal]}
          isLightMode={isLightMode}
        />
      )}
      <NavBar getMode={modeHandler} getTitle={getTitle} />
    </StyledAppWrapper>
  );
};

export default App;
