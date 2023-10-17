import styled from "styled-components";


export const WrapperCard = styled.div`
  display: grid;
  grid-template-rows:120px 120px 120px 120px;
  gap:16px;

  &>.wrap-line{
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 371px;
    
    &>p{
      margin-right: 10px;
      font-size: 16px;
      font-weight: bold;
    }
  }
`
export const Line = styled.div`
   width: 239px;
  height: 4px;
  border-top: 1px solid #D2DDE6;
  border-bottom: 1px solid #D2DDE6;
`
export const Wrap = styled.div`
display: flex;
gap: 19px;
&>img{
  width: 120px;
}
`


export const WrapperSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;

  &>.time{
    gap: 4px;
    display: flex;
    align-items: center;
  justify-content: center;
  }
  &>.ckal {
    gap: 4px;
    display: flex;
    align-items: center;
  justify-content: center;
  }
`


export const WrapSlogan = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
`