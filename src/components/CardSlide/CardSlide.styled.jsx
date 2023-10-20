import isPropValid from "@emotion/is-prop-valid";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledCardSlide = styled(Link)`
  position: relative;  
  width: 376px;
  height: 494px;
  margin-top: 74px;
  margin-bottom:24px;
`;

export const ImgSlide = styled.img`
  width: 376px;
  height: 494px;
  object-fit: cover;
  border-radius: 4px;
`;

export const RecipeDescription = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop) &&
        prop !== 'isOpen'
  })`
position: absolute;
bottom: 16px;
left: 16px;
width: 344px;
height:  ${({ isOpen }) => isOpen ?  "380px" : "150px"};
background-color: #fff;
padding: 20px;
border-radius: 4px;
display: grid;
gap: 12px;
align-content: start;
z-index: 2;
transition: all 0.4s ease-in-out;
overflow:hidden;

&>p {
    font-size: 16px;
    font-weight: 700;
    color: #102B40;
    text-align: left;
}
`;

export const TimeWrapp = styled.div`
    height: 24px;
    display: flex;
    gap: 12px;

`;
export const TextWrapp = styled.div`
    height: 130px;
    overflow: hidden;
`;

export const RecipeTime = styled.div`
    font-size: 12px;
    line-height: 24px;
    color: #102B40;
    display: inline-flex;
    gap: 5px;
    align-items: center;
`;

export const HiddenText = styled.div`
    margin-top: 16px;
    display: grid;
    gap: 12px;
`;

export const Rating = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const StarsWrapp = styled.div`
    display: flex;

`;