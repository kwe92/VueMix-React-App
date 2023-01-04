import NavBar from "./arch/NavBar_arch";
import { StyledAppWrapper } from "./AppStyles";
import { useEffect, useState } from "react";
import { TrailerMovies } from "./components/trailers/TrailersMovies";
import Movies from "./components/movies/Movies";
import Trends from "./components/trends/Trends";
import TvShows from "./components/tvshows/TvShows";
import Pricing from "./components/pricing/Pricing";
import { useMode } from "./hooks/modeHook";
import { color } from "@mui/system";
import { AppBar } from "./components/appbar/AppBar";
import { Route, Routes } from "react-router-dom";
import { SearchBar } from "./components/search_bar/SearchBar";

const App = (props) => {
  // TODO: Extract into its own custom hook to keep code DRY
  // TODO: Finish custom app bar
  // TODO: Create a soruce of truth theme file
  // TODO: Add sign in page for google auth
  // TODO: Add Trending dropdown?

  //TODO: add index.css to have a base styling
  //TODO: Fix the navbar so that it is not absolute as there is no need to be
  //TODO: Refactor the navbar to look better and bee more user friendly

  const [isLightMode, setIsLightMode] = useMode();
  const [title, setTitle] = useState("");
  const [userInput, setUserInput] = useState("");
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
    <>
      <AppBar />
      <StyledAppWrapper isLightMode={isLightMode}>
        <SearchBar input={[userInput, setUserInput]} />
        {showModal && (
          <TrailerMovies
            title={title}
            showModal={[showModal, setShowModal]}
            isLightMode={isLightMode}
          />
        )}
        {/* <NavBar getMode={modeHandler} getTitle={getTitle} /> */}

        <Routes>
          <Route
            path=""
            element={
              <Movies
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={getTitle}
              />
            }
          ></Route>
          <Route
            path="/tvshows"
            element={
              <TvShows
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={getTitle}
              />
            }
          ></Route>
          <Route
            path="trending"
            element={
              <Trends
                isLightMode={isLightMode}
                filterVal={userInput}
                getTitle={getTitle}
              />
            }
          ></Route>
          <Route
            path="/pricing"
            element={<Pricing isLightMode={isLightMode} />}
          ></Route>
        </Routes>
      </StyledAppWrapper>
    </>
  );
};

export default App;
