import styled from "styled-components";

const borderRadius = 0.25;

export const StyledInputContainer = styled.div`
  position: relative;

  display: flex;

  flex-direction: row;

  gap: 0.5rem;

  border-radius: ${borderRadius + "rem"};

  align-items: center;

  height: 4rem;

  background: rgb(38, 38, 38);

  caret-color: white;
  &: hover {
    background: rgb(64, 64, 64);
  }
`;

export const StyledInput = styled.input`
  border: none;

  border-radius: 2px;

  display: block;

  color: white;

  background: transparent;

  width: 100%;

  height: 100%;

  padding: 6px 6px 6px 0px;

  &: focus {
    border: none;
    outline: none;
  }
`;

export const Wrapper = styled.div`
  padding-top: 1rem;
  position: relative;

  border-radius: ${borderRadius * 2 + "rem"};

  width: 95%;
`;
