import styled from "styled-components";

export const Wrapper = styled.div`
width: 1176px;
  display: grid;
  grid-template-columns: 376px 376px 376px;
  gap:27px;
`
export const WrapText = styled.div`
   width: 1176px;
  display: grid;
  grid-template-columns: 376px 376px 376px;
  gap:27px;
  margin-bottom:16px;
  &>div {
    width: 373px;
    height: 21px;
    display: flex;
    align-items: center;
    justify-content: start;
    gap:8px;

  }
  
`
export const LinePopular = styled.div`
   width: 100%;
  height: 4px;
  border-top: 1px solid #D2DDE6;
  border-bottom: 1px solid #D2DDE6;
`
  
export const LineRecently = styled.div`
   width: 67%;
  height: 4px;
  border-top: 1px solid #D2DDE6;
  border-bottom: 1px solid #D2DDE6;
`