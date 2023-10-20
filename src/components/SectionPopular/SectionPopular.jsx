import chak_b from "../../images/imgslides/chak-chak-b.jpg";
import { iconCkal, iconStar, iconTime } from "images/icons";
import {
  LineSectionPopular,
  WrapLineSectionPopular,
  WrapSection,
  WrapSlogan,
  WrapStar,
  WrapperCard,
  WrapperContentCard,
  WrapperImg,
  WrapperSpan,
} from "./SectionPopular.styled";


export const SectionPopular = () => {
  return (
    <WrapSection>
      
        <WrapLineSectionPopular className="wrap-sectionPopular">
          <p>Popular</p>
          <LineSectionPopular className="sectionlinePopular"></LineSectionPopular>
        </WrapLineSectionPopular>
      

      <WrapperCard className="wrapper-card">
        <WrapperContentCard className="wrapper-contentcard">
          <WrapperSpan className="wrapper-span">
            <div>
              {iconCkal}
              <span>30 minutes</span>
            </div>
            <div>
              {iconTime}
              <span>716 kcal</span>
            </div>
          </WrapperSpan>
          <p>
            The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish
            Aebleskiver
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            faucibus magna egestas volutpat sollicitudin justo, nibh aliquam.
          </p>
          <WrapSlogan>
            <WrapStar className="wrap-star">
              {iconStar}
              {iconStar}
              {iconStar}
              {iconStar}
              {iconStar}
            </WrapStar>
            <div>
              <p>234</p>
              <p className="sweets">Sweets</p>
            </div>
          </WrapSlogan>
        </WrapperContentCard>
        <WrapperImg className="wrapper-img">
          <img src={chak_b} alt="chak" />
        </WrapperImg>
      </WrapperCard>
    </WrapSection>
  );
};
