import {
  iconTwitter,
  iconYoutube,
  iconShare,
  iconStar,
} from "images/icons";
import {
  List,
  MainFooterWrap,
  SocialLogos,
  Wrap,
  WrapBrands,
  WrapStar,
  WrapStarGoogle,
  Wrapper,
  WrapperLogos,
  WrapperStar,
  
} from "./MainFooter.styled";
import cloud from "../../images/brands/cloud.png";
import ssl from "../../images/brands/ssl.png";
import germany from "../../images/brands/germany.png";
import support from "../../images/brands/support.png";
import gg from "../../images/google/gg.png";
import g from "../../images/google/g.png";
import o from "../../images/google/o.png";
import l from "../../images/google/l.png";
import e from "../../images/google/e.png";



export const MainFooter = () => {
  return (
    <MainFooterWrap className="main-footer__wrap">
      <Wrapper>
        <List className="list">
          <li className="item">
            <a className="link">Kurfürstendamm 54 10707 Berlin</a>
          </li>
          <li className="item">
            <a className="link" href="tel:+493091449144">
              <span className="span">Tel:</span> +49 30 9144 9144
            </a>
          </li>
          <li className="item">
            <a className="link" href="fax:+493091449144">
              <span className="span">Fax:</span> +49 30 897 24 165
            </a>
          </li>
          <li className="item">
            <a className="link" href="mailto:info@gastro-smart.com">
              <span className="span">E-Mail:</span> info@gastro-smart.com
            </a>
          </li>
          <li className="item">
            <a className="link">Impressum</a>
          </li>
        </List>
        <SocialLogos className="social-logos">
          <p>Folge uns:</p>
          <WrapperLogos className="wrapper-logos">
            <li>
              <a href="">{iconShare}</a>
            </li>
            <li>
              <a href="">{iconTwitter}</a>
            </li>
            <li>
              <a href="">{iconYoutube}</a>
            </li>
          </WrapperLogos>
        </SocialLogos>
        <WrapBrands className="wrap-brands">
          <ul>
            <li>
              <a href="">
                <img className="img-ssl" src={ssl} alt=""></img>
              </a>
            </li>
            <li>
              <a href="">
                <img src={germany} alt=""></img>
              </a>
            </li>
            <li>
              <a href="">
                <img src={support} alt=""></img>
              </a>
            </li>
            <li>
              <a href="">
                <img src={cloud} alt=""></img>
              </a>
            </li>
          </ul>
          <Wrap className="wrap">
            <p>Hinterlasse eine Bewertung auf:</p>
            
            <WrapperStar className="wrapper-star">
              <div>
                <ul className="wrapper-google">
                  <li><img className="google capital" src={gg} alt="" /></li>
                  <li><img className="google" src={o} alt="" /></li>
                  <li><img className="google" src={o} alt="" /></li>
                  <li><img className="google google-g" src={g} alt="" /></li>
                  <li><img className="google" src={l} alt="" /></li>
                  <li><img className="google" src={e} alt="" /></li>
                </ul>
                <WrapStarGoogle className="wrap-star__google">
                  <p>Reviews</p>
                  {iconStar}
                  {iconStar}
                  {iconStar}
                  {iconStar}
                  {iconStar}
                </WrapStarGoogle>
              </div>
              
                
                <WrapStar className="wrap-star">
                  <p>4.9</p>
                  {iconStar}
                  {iconStar}
                  {iconStar}
                  {iconStar}
                  {iconStar}
                </WrapStar>
              
            </WrapperStar>
          </Wrap >
        </WrapBrands>
      </Wrapper>
    </MainFooterWrap>
  );
};
