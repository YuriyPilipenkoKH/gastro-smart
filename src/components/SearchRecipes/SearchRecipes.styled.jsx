import styled from "styled-components";
import { StyledButton } from 'components/Button/Button.styled';

export const LabelSearch = styled.label`
  font-size: 32px;
  font-weight: bold;
  margin-top: 48px;
  
`
export const WrapSearch = styled.div`
display:flex;
align-items: center;
justify-content: space-between;
width: 1186px;
  margin-top: 16px;
  border: 1px solid #B9C7D2;
  border-radius: 4px;
  
`
export const InputSearch = styled.input`
width: 1186px;
height: 56px;
border: none;
outline: none;
padding-left:16px;
&::placeholder {
    padding: 0 16px 16px 24px;
  }
`
export const ButtonSearch = styled(StyledButton)`
width: 157px;
height: 56px;
border-radius: 4px;
  padding:16px 72px;
background-color: #F46C3F;
font-size:18px;
font-weight:800;
line-height: 24px;
`