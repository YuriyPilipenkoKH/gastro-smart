import { HomeWrapper } from "./Page.styled";
import { LineDishes } from "components/LineDishes/LineDishes";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import recipes from '../json/recipes.json'
import Slider from "components/Slider/Slider";

import { SectionPlan } from "components/SectionPlan/SectionPlan";
import { Content } from "components/Content/Content";



export default function Home() {

    return (
      <HomeWrapper  >
        <Content/>
        <SectionPlan/>
       {/* <SearchRecipes/>
         <Slider slides={recipes}/>
         <LineDishes/>
         <SectionPopularRecentlyAdded/>
         <SectionPlan/>  */}
      </HomeWrapper>
    );
  }