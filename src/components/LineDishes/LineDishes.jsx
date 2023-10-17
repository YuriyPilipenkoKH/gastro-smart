import { LineDishesWrapper } from "./LineDishes.styled";
import pudding from "../../images/line-dishes/pudding.png"
import soup from "../../images/line-dishes/soup.png"
import beef from "../../images/line-dishes/beef.png"
import fish from "../../images/line-dishes/fish.png"
import pasta from "../../images/line-dishes/pudding.png"
import salad from "../../images/line-dishes/salad.png"
import vegetorian from "../../images/line-dishes/vegetorian.png"
import potato from "../../images/line-dishes/potato.png"
import chicken from "../../images/line-dishes/chicken.png"


export const LineDishes = () => {
  return (
    <LineDishesWrapper className="line-dishes__wrapper">
      
        <a href="">
          <img src={pudding} alt="pudding" />
        </a>
        <a href="">
          <img src={soup} alt="soup" />
        </a>
        <a href="">
          <img src={beef} alt="beef" />
        </a>
        <a href="">
          <img src={fish} alt="fish" />
        </a>
        <a href="">
          <img src={pasta} alt="pasta" />
        </a>
        <a href="">
          <img src={salad} alt="salad" />
        </a>
        <a href="">
          <img src={vegetorian} alt="vegetorian" />
        </a>
        <a href="">
          <img src={potato} alt="potato" />
        </a>
        <a href="">
          <img src={chicken} alt="chicken" />
        </a>
      
    </LineDishesWrapper>
  );
};