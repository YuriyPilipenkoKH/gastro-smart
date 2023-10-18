import { HiddenText, ImgSlide, Rating, RecipeDescription, RecipeTime, StarsWrapp, StyledCardSlide, TextWrapp, TimeWrapp } from "./CardSlide.styled"
import img1 from '../../images/slider/pancake.jpg'
// import img2 from '../../images/slider/meat.jpg'
// import img3 from '../../images/slider/cereal.jpg'
import { iconCalories, iconStar, iconTime } from "images/icons"
import { useState } from "react"

const CardSlide = ({slides, slideIndex}) => {
    const [isOpen, setIsOpen] = useState(false)
    const openList =() => {
        setIsOpen ( true)
    }
    const closeList =() => {
        setIsOpen ( false)
    }

  return (
    <StyledCardSlide >
        <ImgSlide 
        src={slides[slideIndex].url_img_b}
        alt="Recipe Picture"
        />

        <RecipeDescription
        onMouseOver={openList}
        onMouseOut = {closeList}
        isOpen={isOpen}>
        <h3> {slides[slideIndex].title_recipes}</h3>    
        <TimeWrapp>
            <RecipeTime>
                {iconTime}
                {slides[slideIndex].cooking_time} minutes
            </RecipeTime>
            <RecipeTime>
                {iconCalories}
                {slides[slideIndex].kilocalories} kcal
            </RecipeTime>
        </TimeWrapp>
        <TextWrapp>
            <p>{slides[slideIndex].description_recipes.replace("Описание приготовления:", "")}
                  </p>
        </TextWrapp>

              <HiddenText >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus magna egestas.</p>
                <Rating>
                    <StarsWrapp>
                        {iconStar}
                        {iconStar}
                        {iconStar}
                        {iconStar}
                        {iconStar}
                        (24)
                    </StarsWrapp>
                    <p>Sweets</p>

                </Rating>
              </HiddenText>
        </RecipeDescription>
    </StyledCardSlide>
  )
}

export default CardSlide