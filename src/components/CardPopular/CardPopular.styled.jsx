import styled from "styled-components";

export const Wrapper = styled.div`
width: 1176px;
  display: grid;
  grid-template-columns: 376px auto 376px;
  gap:27px;
`
export const WrapperCard = styled.div`
  display: flex;
  flex-direction: column;
  gap:16px;

  &> div {
  display: flex;
  align-items: center;
gap:10px;

}
  
&> p{
  font-size: 16px;
  font-weight: bold;

}

`
export const Line = styled.div`
   width: 100%;
  height: 4px;
  border-top: 1px solid #D2DDE6;
  border-bottom: 1px solid #D2DDE6;
`

export const WrapperImg = styled.div`
   &> img{
    border-radius:4px;
    height:277px;
   }
`
export const WrapperSpan = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 16px;

  &>div{
    gap: 4px;
    display: flex;
    align-items: center;
  justify-content: center;
  }
`

export const WrapStar = styled.div`
  display: flex;
  align-items: center;
  margin-right:12px;
  
`
export const WrapSlogan = styled.div`
  display: flex;
  align-items: center;
  
  &>div{
    display: flex;
   
    width: 100%;
    justify-content: space-between;
    align-items: center;

    &>p{
      font-size: 14px;
      font-weight: bold;
    }

    &> .sweets{
      font-size: 14px;
      font-weight: bold;
      padding: 2px 8px;
      background-color: #FAFAFA;

    }

}
  
`