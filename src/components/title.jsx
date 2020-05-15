import styled from "styled-components";

const StyledTitle = styled.h1`
  display: flex;
  margin: 0 auto;
  max-width: 100%;
  /* margin: 0; */
  font-size: 7rem;
  font-weight: bold;
  line-height: 0.9;
  text-align: center;
  color: transparent;
  flex-direction: column;
  align-content: center;

  &:hover {
    color: white;
    transition: 300ms linear;
  }
`;

export default StyledTitle;
