import CardSlide from "components/CardSlide/CardSlide";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import { LineDishes } from "components/LineDishes/LineDishes";
import { ContentWrap } from "./Content.styled";



export const Content =()  => {
    return (
    <ContentWrap>
      <SearchRecipes />
      <CardSlide />
      <LineDishes />
      <SectionPopularRecentlyAdded/>
      
    </ContentWrap>
      )
}