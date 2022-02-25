import styled from "styled-components"

export const Header = styled.header`
  background: ${props => props.theme.colors.white};

  height: 5rem;
  width: 100%;

  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    margin-left: auto;
  }
`