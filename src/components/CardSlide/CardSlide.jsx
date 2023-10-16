import { HiddenText, ImgSlide, Rating, RecipeDescription, RecipeTime, StarsWrapp, StyledCardSlide, TimeWrapp } from "./CardSlide.styled"
import img1 from '../../images/slider/pancake.jpg'
// import img2 from '../../images/slider/meat.jpg'
// import img3 from '../../images/slider/cereal.jpg'
import { iconCalories, iconStar, iconTime } from "images/icons"
import { useState } from "react"

const CardSlide = () => {
    const [isOpen, setIsOpen] = useState(false)
    const openList =() => {
        setIsOpen ( true)
    }
    const closeList =() => {
        setIsOpen ( false)
    }

  return (
    <StyledCardSlide
    onMouseOver={openList}
    onMouseOut = {closeList}>
        <ImgSlide 
        src={img1}
        alt="Recipes Picture"
        />

        <RecipeDescription
        isOpen={isOpen}>
        <TimeWrapp>
            <RecipeTime>
                {iconTime}
                30 minutes
            </RecipeTime>
            <RecipeTime>
                {iconCalories}
                716 kcal
            </RecipeTime>
        </TimeWrapp>
        <p>The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish Aebleskiver
              </p>

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