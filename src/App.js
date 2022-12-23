import NavBar from "./components/NavBar";
import { StyledAppWrapper } from "./styles/styled_components/styles";
import { useState } from "react";
import { TrailerMovies } from "./components/TrailersMovies";
import { useMode } from "./hooks/modeHook";
const App = (props) => {
  // TODO: Extract into its own custom hook to keep code DRY
  // TODO: Finish custom app bar
  // TODO: Create a soruce of truth theme file
  // TODO: Add sign in page for google auth
  // TODO: Add Trending dropdown?

  const [isLightMode, setIsLightMode] = useMode();
  const [title, setTitle] = useState("");
  const [showModal, setShowModal] = useState(false);

  const getTitle = (title) => {
    console.log(title);
    setTitle(title);
    setShowModal(true);
    return;
  };

  const modeHandler = (mode) => {
    setIsLightMode(mode);
  };

  return (
    <StyledAppWrapper mode={isLightMode}>
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
