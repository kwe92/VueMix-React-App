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
  overflow: hidden;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);
}

&.modal-content {
  background-color: ${(props) => (props.isLightMode ? "#fefefe" : "black")};
  margin: auto;
  padding: 20px;
  border: 1px solid #888;
  width: 80%;
  max-width:100%;
  height: 80%;
  max-height:100%;
  border-radius: 20px;

}

& span {
  color: #aaaaaa;
  font-size: 28px;
  font-weight: bold;
}

& span: hover,
& span: focus {
  color: ${(props) => (props.isLightMode ? "#000" : "white")};
  text-decoration: none;
  cursor: pointer;
}
`;

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 1rem;
  font-family: Roboto;
`;

const ErrorColor = styled.div`
  color: ${(props) => !props.isLightMode && "white"};
`;

export const ErrorMessage = styled(ErrorColor)`
  font-size: 8vw;
  margin: 0;
  margin-top: 1rem;
`;

export const ErrorTitle = styled(ErrorMessage)`
  font-size: 4vw;
  margin-top: 0rem;
`;
