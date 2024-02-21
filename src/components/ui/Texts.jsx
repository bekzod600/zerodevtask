import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${(props) => (props.color ? props.color : "#bf4f74")};
  padding-bottom: 14px;
`;
