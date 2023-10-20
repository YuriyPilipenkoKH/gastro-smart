
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import { LineDishes } from "components/LineDishes/LineDishes";
import { ContentWrap } from "./Content.styled";
import { SectionPopular } from "components/SectionPopular/SectionPopular";

import { GalleriAll } from "components/Galleri/Galleri";
import Slider from "components/Slider/Slider";
import recipes from '../../json/recipes.json'


export const Content =()  => {
    return (
    <ContentWrap>
      <SearchRecipes />
      <Slider slides={recipes}/>
      <LineDishes />
      <SectionPopularRecentlyAdded/>
      <SectionPopular/>
      <GalleriAll/>
      
      
      
    </ContentWrap>
      )
}