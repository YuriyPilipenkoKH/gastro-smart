import CardSlide from "components/CardSlide/CardSlide";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import { LineDishes } from "components/LineDishes/LineDishes";
import { ContentWrap } from "./Content.styled";
import { SectionPopular } from "components/SectionPopular/SectionPopular";
import { SectionPlan } from "components/SectionFooter/SectionPlan";
import { GalleriAll } from "components/Galleri/Galleri";



export const Content =()  => {
    return (
    <ContentWrap>
      <SearchRecipes />
      <CardSlide />
      <LineDishes />
      <SectionPopularRecentlyAdded/>
      <SectionPopular/>
      <GalleriAll/>
      <SectionPlan />
      
    </ContentWrap>
      )
}