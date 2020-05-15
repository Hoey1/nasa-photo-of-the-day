import styled from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  /* background: rgba(0, 0, 0, 0.5); */
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    transition: background-color 100ms linear;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
  }
`;

export default StyledOverlay;
