import { StyledLink } from "../SharedLayout/SharedLayout.styled";
import { StyledWrap } from "./Navigation.styled";



export const Navigation = () => {

    return (
      <StyledWrap >
        <StyledLink  to="/">
        Home
        </StyledLink>
        <StyledLink  to="/j">
        Kalkulation
        </StyledLink>
        <StyledLink  to="/j">
        Einkauf
        </StyledLink>
        <StyledLink  to="/j">
        Einkauf
        </StyledLink>

      </StyledWrap>
    );
  };