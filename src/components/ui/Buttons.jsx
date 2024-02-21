import styled from "styled-components";

export const DefaultButton = styled.button`
  background-color: ${(props) => (props.bg_color ? props.bg_color : "#645cfc")};
  border: none;
  padding: 10px;
  color: white;
  border-radius: 4px;
  transition-duration: 200ms;
  &:hover {
    background-color: ${(props) =>
      props.hover_color ? props.hover_color : "#423adf"};
  }
`;
