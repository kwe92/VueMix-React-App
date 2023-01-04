import * as styles from "../../styles/styles";
import { AiOutlineSearch } from "react-icons/ai";
import { Wrapper } from "./SearchBarStyles";
import { StyledInput } from "./SearchBarStyles";
import { StyledInputContainer } from "./SearchBarStyles";
export const SearchBar = ({ input }) => {
  const [userInput, setUserInput] = input;

  const handleUserInput = (event) => {
    const input = event.target.value;
    setUserInput(input);
  };

  return (
    <Wrapper>
      <StyledInputContainer>
        <AiOutlineSearch
          style={{ paddingLeft: "0.5rem", color: "white" }}
        ></AiOutlineSearch>
        <StyledInput
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={handleUserInput}
          value={userInput}
        ></StyledInput>
      </StyledInputContainer>
    </Wrapper>
  );
};
