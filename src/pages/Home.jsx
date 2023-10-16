import CardSlide from "components/CardSlide/CardSlide";
import { HomeWrapper } from "./Page.styled";
import Slider from "components/Slider/Slider";


export default function Home() {


    return (
      <HomeWrapper  >
       
   
         {/* <CardSlide/> */}
         <Slider cards ={CardSlide}/>
      

      </HomeWrapper>
    );
  }