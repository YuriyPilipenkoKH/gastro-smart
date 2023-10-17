import styled from 'styled-components';
import board from "../../images/fonMobileMenu.jpg"
import { NavLink } from 'react-router-dom';

export const MenuWrapp = styled.div`

  display: flex;
  flex-direction: column;
  position: fixed;
  top: -100%;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100vh;
  background-image: url(${board});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover; width: 100%; height: 100vh; border: 1px solid; resize: both; overflow: scroll;
  z-index: 100;
  
  transition: top 1s;
  padding: 25px;

  &.active {
    top: 0;
  }

  /* @media screen and (min-width: 768px) {
    display: none;
  } */

`
  export const MenuHeader = styled.div.attrs(props => ({
    theme: props.theme,
  }))`
    position: relative;
    
    width: 100%;
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
    align-self: center ;

    @media screen and (min-width: 768px) {
        width: 768px;
    }

    &>button.closeBtn {
        &> svg {
        transition:  all 1s ease-in-out;
        color: var(--black);
        scale: 2;
        margin-top: 15px;
        width: 1.5rem;
        height: 1.5rem;

       
        }

    &:hover{
        background-color: #eee5;


        &> svg {
            transition: all 1s ease-in-out;
            fill:  ${props => props.theme === 'light' ? '#eee' : '#222'};
        }
    }
    }

`
export const MenuContent = styled.div`
    display: grid;
    place-items: center;
    /* grid-template-rows: 100px 200px ; */
    padding: 40px;
    gap: 40px;

    `
    export const StyledLink = styled(NavLink)`
    height: 54px;
    width: 215px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px 16px;
    border: 2px solid transparent;
    border-radius: 4px;
    text-decoration: none;
    color: var(--text-color);
    transition: all 1s ease-in-out;
    font-weight: 600;
    transition: 0.3s ease;
  
    &.active {
      color: var(--white);
      background-color: var(--blue);
    }
  `;