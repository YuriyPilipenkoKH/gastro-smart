import {
  iconTwitter,
  iconYoutube,
  iconShare,
  iconStar,
  googleLogo,
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
import { Link } from "react-router-dom";



export const MainFooter = () => {
  return (
    <MainFooterWrap className="main-footer__wrap">
      <Wrapper>
        <List className="list">
          <li className="item">
            <Link className="link">Kurfürstendamm 54 10707 Berlin</Link>
          </li>
          <li className="item">
            <Link className="link" href="tel:+493091449144">
              <span className="span">Tel:</span> +49 30 9144 9144
            </Link>
          </li>
          <li className="item">
            <Link className="link" href="fax:+493091449144">
              <span className="span">Fax:</span> +49 30 897 24 165
            </Link>
          </li>
          <li className="item">
            <Link className="link" href="mailto:info@gastro-smart.com">
              <span className="span">E-Mail:</span> info@gastro-smart.com
            </Link>
          </li>
          <li className="item">
            <Link className="link">Impressum</Link>
          </li>
        </List>
        <SocialLogos className="social-logos">
          <p>Folge uns:</p>
          <WrapperLogos className="wrapper-logos">
            <li>
              <Link>{iconShare}</Link>
            </li>
            <li>
              <Link>{iconTwitter}</Link>
            </li>
            <li>
              <Link>{iconYoutube}</Link>
            </li>
          </WrapperLogos>
        </SocialLogos>
        <WrapBrands className="wrap-brands">
          <ul>
            <li>
              <Link>
                <img className="img-ssl" src={ssl} alt=""></img>
              </Link>
            </li>
            <li>
              <Link>
                <img src={germany} alt=""></img>
              </Link>
            </li>
            <li>
              <Link>
                <img src={support} alt=""></img>
              </Link>
            </li>
            <li>
              <Link>
                <img src={cloud} alt=""></img>
              </Link>
            </li>
          </ul>
          <Wrap className="wrap">
            <p>Hinterlasse eine Bewertung auf:</p>
            
            <WrapperStar className="wrapper-star">
              <div>
                <Link className="wrapper-google">
                  {googleLogo}
                </Link>
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
