import styled from "styled-components";

//TODO: Change light mode to a . different color maybe a olive green or soft green
// cover screen when filtering
export const StyledAppWrapper = styled.div`
  // background: ${(props) => (props.isLightMode ? "white" : "#121212")};

  display: flex;

  flex-direction: column;

  align-items: center;

  width: 100%;

  height: 100%;
`;
