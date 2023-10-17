import { HomeWrapper } from "./Page.styled";
import { LineDishes } from "components/LineDishes/LineDishes";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import { useEffect, useState } from "react";



export default function Home() {

 const [recipes, setRecipes] = useState([]);
 useEffect(() => {
  // Load the JSON data from the public directory
  fetch('../json/recipes.json') // This assumes the JSON file is in the public directory
    .then((response) => {
      console.log(response)
      response.json()
    })
    .then((data) => setRecipes(data))
    .catch((error) => console.error('Error loading JSON:', error));
}, []);

console.log('recipes',recipes)

    return (
      <HomeWrapper  >
       <SearchRecipes/>
         {/* <Slider slides={slides}/> */}
         <LineDishes/>
         <SectionPopularRecentlyAdded/>
      

      </HomeWrapper>
    );
  }