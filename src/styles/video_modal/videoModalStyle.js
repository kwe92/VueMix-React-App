import styled from "styled-components";

export const VideoModal = styled.div`
&.modal {
  display: ${(props) => (props.display ? "" : "none")};
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}


&.modal-content {
  background-color: ${(props) => (props.isLightMode ? "#fefefe" : "black")};
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  height: 60%;
}


& span {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
}

& span: hover,
& span: focus {
  color: #000;
  text-decoration: none;
  cursor: pointer;
}
`;