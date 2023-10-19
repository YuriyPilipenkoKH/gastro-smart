import isPropValid from "@emotion/is-prop-valid";
import styled from "styled-components";

export const FormContainer = styled.div`
    width: 700px;
    height: 450px;
    border: 2px solid #777;
    border-radius: 4px;
  
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
`
export const FormBG = styled.div.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop)  && prop !== 'photo',
  })`
    background-image: url(${props => props.photo});
    background-size: cover;
    background-position: center;  
`
export const StyledForm = styled.form`
   padding: 30px;
   display: grid;
   
   align-content: center;
   justify-content: center;
   justify-items: start;
   gap: 25px;

   &>button.LogBtn{
    width: 120px;
    height: 38px;
   }
`
export const FormLabel = styled.label`
    position: relative;
    display: grid;
    gap: 4px;

    &>button.showBtn{
        position: absolute;
        top: 33px;
        right: 20px;
    }
`
export const FormInput = styled.input.withConfig({
    shouldForwardProp: prop =>
        isPropValid(prop)  && prop !== 'errors',
  })`
    width: 250px;
    height: 38px;
    border: 1px solid #777;
    border-color: ${({ errors }) => errors ?  "crimson" : "#777"};
    border-radius: 4px;
    padding: 8px;
    outline: none;
`
export const RegLink = styled.p`
    font-size: 14px;
    display: flex;
    gap: 10px;
    align-items: baseline;
    &>a{
        font-size: 20px;
        color: #0D5D81;
    }
`
export const ErrorWrap = styled.p`
    color: crimson;
    position: absolute;
    bottom: -16px;
    font-size: 12px;
    font-weight: 500;
`