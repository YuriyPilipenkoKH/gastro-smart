import CardSlide from "components/CardSlide/CardSlide";
import { HomeWrapper } from "./Page.styled";
import { LineDishes } from "components/LineDishes/LineDishes";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";

export default function Home() {


    return (
      <HomeWrapper  >
       <SearchRecipes/>
   
         <CardSlide/>
         <LineDishes/>
         <SectionPopularRecentlyAdded/>
      

      </HomeWrapper>
    );
  }