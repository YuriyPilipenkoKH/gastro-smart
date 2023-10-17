import { ArrowButton } from "components/Button/Button";
import { useState } from "react";
import {  SliderWrapper } from "./Slider.styled";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"

const Slider = ({ slides }) => {
  console.log(slides)
  const [currentIndex, setCurrentIndex] = useState(0)
  const goToPrevious =() => {
      const isFirstSlide = currentIndex === 0
      const newIndex = isFirstSlide ? slides.length - 1  : currentIndex - 1
      setCurrentIndex(newIndex)
  }
  const goToNext =() => {
      const isLastSlide = currentIndex === slides.length - 1
      const newIndex = isLastSlide ? 0  : currentIndex + 1
      setCurrentIndex(newIndex)
  }

return (
  <SliderWrapper>
      <ArrowButton 
      className="Previous"
      onClick={goToPrevious}>
          <MdArrowBackIos size={40}/>
      </ArrowButton>
      <ArrowButton
      className="Next"
       onClick={goToNext}>
          <MdArrowForwardIos size={40}/>
      </ArrowButton>
      <img src={slides[currentIndex].url_img_b} alt="slideImage" />

  </SliderWrapper>
)
}

export default Slider