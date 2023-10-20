import styled from "styled-components";
import { StyledButton } from 'components/Button/Button.styled';

export const LabelSearch = styled.label`
  position: relative;
  font-size: 32px;
  font-weight: bold;

  
  &>span{
    position: absolute;
    right: 5px;
    top: 20px;
    font-size: 18px;
    font-weight: 600;
    color: #0D5D81;
  }
`
export const SearchSection = styled.div`
  padding: 50px 0;
`
export const WrapSearch = styled.div`
position: relative;
display:flex;
align-items: center;
justify-content: space-between;
width: 1186px;
  margin-top: 16px;
  border: 1px solid #B9C7D2;
  border-radius: 4px;

  
  &>button.search-cross{
    position: absolute;
    right: 170px;
    top: 12px;
  }
`
export const InputSearch = styled.input`
width: 1186px;
height: 56px;
border: none;
outline: none;
padding-left:16px;
font-size: 16px;
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