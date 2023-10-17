import { HomeWrapper } from "./Page.styled";
import { LineDishes } from "components/LineDishes/LineDishes";
import { SectionPopularRecentlyAdded } from "components/SectionPopularRecentlyAdded/SectionPopularRecentlyAdded";
import { SearchRecipes } from "components/SearchRecipes/SearchRecipes";
import Slider from "components/Slider/Slider";
import slide1 from '../images/slider/pancake.jpg'
import slide2 from '../images/slider/meat.jpg'
import slide3 from '../images/slider/cereal.jpg'

export default function Home() {
  const slides = [
    {url: slide1, title: 'slide1'},
    {url: slide2, title: 'slide2'},
    {url: slide3, title: 'slide3'},
    // {url: slide4, title: 'slide4'},
    // {url: slide5, title: 'slide5'},
]

    return (
      <HomeWrapper  >
       <SearchRecipes/>
         <Slider slides={slides}/>
         <LineDishes/>
         <SectionPopularRecentlyAdded/>
      

      </HomeWrapper>
    );
  }