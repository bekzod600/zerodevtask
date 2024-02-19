import styled from "styled-components";

export const DefaultButton = styled.button`
  background-color: ${(props) => (props.red ? "red" : "#645cfc")};
  border: none;
  padding: 10px;
  color: white;
`;
