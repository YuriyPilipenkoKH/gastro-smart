import styled from "styled-components";

export const Wrapper = styled.div`
  width: 1172px;
  margin: 0 auto;
  display: grid;
  grid-template-rows: 118px 68px auto;
`;

export const MainFooterWrap = styled.div`
  width: 100%;
  height: 337px;
  background-color: #1c5682;
`;
export const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  
  color: #fafafa;
  & > .item {
    padding: 2px 30px;
  }

  & > .item:not(:last-child) {
    border-right: 1px dashed #fafafa;

    
  }
  & > .link {
    font-size: 14px;
  }
`;
export const SocialLogos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 12px;
  & > p {
    color: #fafafa;
    font-size:16px;
    font-weight: bold;

  }
`;

export const WrapperLogos = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 14px;
`;

export const WrapBrands = styled.div`
  display: flex;

  justify-content: space-between;
  align-items: center;
  gap: 12px;

  & > ul {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
  }

  & > ul > li > a > img {
    width: 92px;
    height: 92px;
  }
  & > ul > li > a > .img-ssl {
    width: 113px;
    height: 92px;
  }
`;


export const Wrap = styled.div`
width: 245px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;
    &>p{
      text-align: center;
      color: #FAFAFA;
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 12px;
    }

    

`
export const WrapperStar = styled.div`
display: flex;
align-items: center;
  justify-content: space-around;
    &>div>ul{
      width: 78px;
    height: 25px;
      display: flex;
      align-items: baseline;
      &>li>.capital{
        width: 19px;
        height: 19px;
    }
  }

`

export const WrapStarGoogle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  
  
  & > p {
    font-size: 8px;
      color: #fafafa;
      margin-right:9px;
    }
  
  & > svg {
    width: 7px;
    height: 7px;
    fill: #fafafa;
    
  }
`;
export const WrapStar = styled.div`
  display: flex;

  justify-content: center;
  align-items: center;
  gap: 5px;
  align-items: end;
    width: 138px;
    height: 20px;

  &>p{
    font-size: 16px;
    font-weight: bold;
    margin-right: 6px;
      color: #F5BF44;
    }

`;