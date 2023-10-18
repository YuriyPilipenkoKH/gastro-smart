import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import isPropValid from '@emotion/is-prop-valid';


export const MainHeader= styled.header.withConfig({
  shouldForwardProp: prop =>
      isPropValid(prop) &&
      prop !== 'theme'
})`
display: flex;
  position: relative;
  top: 0;
  left: 0;
  width: 320px;
  height: 126px;
  display: grid;
  grid-template-columns: 100px auto 250px;
  place-items: center;
  padding: 20px 16px 20px;
  background-color: transparent;
  border-bottom: 1px solid #2227;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 32px 16px 16px;
    }
  @media screen and (min-width: 1280px) {
    padding: 26px 40px 20px;
    width: 1186px;
    }

&>button.mobile-menu{
  
 &>div{
 
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  &>svg{
    width:2em;
  height:2em;
  }

 }
  /* @media screen and (min-width: 768px) { */
    /* display: none;
    }

     /* &> svg {
        transition:  all 1s ease-in-out;
        color: var(--text-color);
        scale: 2;
        } */

    /* &:hover{
        background-color: #eee5;
        &> svg {
            transition:  all 1s ease-in-out;
            fill:  ${({ theme }) => theme === 'light' ? "var(--white)" : "var(--black)"};
        }
    } */
    } 


`

export const NavigationWrapp = styled.div`
display: grid;
justify-items: center;
gap: 8px;
`

export const ContactsWrapp = styled.div`
position: absolute;
right: 40px;
display: grid;
align-items: center;
gap: 8px;


&>a.loginBtn,
&>button.logoutBtn{
  justify-self: end;
  font-size: 20px;
  font-weight: 600;
  color: #FF865E;
}
`


export const StyledLink = styled(NavLink)`
  height: 34px;
  width: 115px;  
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 16px;
  border:2px solid transparent;
  border-radius: 4px;
  text-decoration: none;
  color: var(--text-color) ;
  transition: all 1s ease-in-out;
  font-weight: 600;
  transition: 0.3s ease-in-out;

  &.active {
    color: var(--white);
    background-color: var(--blue);
  
  }
`;

export const MainFooter = styled.footer`
  display: flex;
  align-items: baseline;
  justify-content: center;
  gap: 40px;
  width: 320px;
  height: 90px;
  padding: 22px 16px;

  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color:  var(--text-color);
  
  background-color: transparent;
  transition: color 1s ease-in-out, fill 1s ease-in-out;

  &> svg {
    
    transition: color 1s ease-in-out, fill 1s ease-in-out;
    fill: var(--text-color);
  }
  @media screen and (min-width: 768px) {
    width: 768px;
    }
  @media screen and (min-width: 1280px) {
   
    width: 1280px;
    }

    &>img{
      width: 40px;
    }
`