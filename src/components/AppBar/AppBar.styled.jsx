import isPropValid from "@emotion/is-prop-valid";
import styled from "styled-components";

export const StyledBar = styled.div`
    width: 100%;
   display: grid;
   justify-items: end;
    gap: 3px;
    &>a {
        width: 151px;
        display: flex;
        gap: 4px;
        justify-content: space-between;
        align-items: baseline;
        padding: 2px;
    }
    &>a:not(:last-child){
        border-bottom: 1px solid #888;
    }

    &>.int>span.intNumber {
     font-size: 12px;
}

`

export const ThemeBtn = styled.button.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'theme'
  })`
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    outline: none;
    border-radius: 50%;
    background-color: transparent;
    transition: all 0.4ms ease-in-out;
    cursor: pointer;
 
    &> svg {
        transition:  fill 1s ease-in-out;
        fill: var(--text-color);
        }

    &:hover{
        background-color: #eee5;

        &> svg {
            transition:  fill 1s ease-in-out;
            fill:  ${({ theme }) => theme === 'light' ? "var(--yellow)" : "var(--black)"};
        }
    }
`