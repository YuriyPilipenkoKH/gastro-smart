import { StyledArrowButton, StyledBurgerButton, StyledButton, StyledFlatButton } from "./Button.styled";

export const Button = ({ children, ...props }) => {
    return <StyledButton type='button' {...props}> {children}</StyledButton>;
  };

export const FlatButton = ({ children, ...props }) => {
    return <StyledFlatButton type='button' {...props}> {children}</StyledFlatButton>;
  };

  export const BurgerButton = ({ children, ...props }) => {
    return (
      <StyledBurgerButton type="button" {...props}>
        {' '}
        {children}
      </StyledBurgerButton>
    );
  };

  export const ArrowButton = ({ children, ...props }) => {
    return <StyledArrowButton type='button' {...props}> {children}</StyledArrowButton>;
  };