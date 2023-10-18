import { HomeWrapper } from "./Page.styled";
import { LineDishes } from "components/LineDishes/LineDishes";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import recipes from '../json/recipes.json'
import Slider from "components/Slider/Slider";



export default function Home() {

    return (
      <HomeWrapper  >
       <SearchRecipes/>
         <Slider slides={recipes}/>
         <LineDishes/>
         <SectionPopularRecentlyAdded/>
      </HomeWrapper>
    );
  }