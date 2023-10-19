import { iconCkal, iconStar, iconTime } from "images/icons"
import { LineGalleriAll, WrapGalleriAll, WrapLineGalleriAll, WrapSlogan, WrapStar, WrapperCard, WrapperImg, WrapperSpan } from "./Galleri.styled"
import chak_b from "../../images/imgslides/chak-chak-b.jpg";
export const GalleriAll = ()=>{
  return(
    <>
      <WrapLineGalleriAll className="wrap-sectionPopular">
          <p>All</p>
          <LineGalleriAll className="sectionlinePopular"></LineGalleriAll>
        </WrapLineGalleriAll>
        <WrapGalleriAll>
        <WrapperCard className="wrapper-card">
      
      <WrapperImg className="wrapper-img">
        <img src={chak_b} alt="chak" />
      </WrapperImg>
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
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus
      magna egestas volutpat sollicitudin justo, nibh aliquam.
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
  </WrapperCard>
        </WrapGalleriAll>
      
    </>
  )
}