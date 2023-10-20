import { ArrowButton } from "components/Button/Button";
import { useState } from "react";
import {  SliderWrapper } from "./Slider.styled";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md"
import CardSlide from "components/CardSlide/CardSlide";

const Slider = ({ slides }) => {
  const array = slides.map((e,i) => i)

  const [currentIndex, setCurrentIndex] = useState(0)
  const [indexArray, setIndexArray] = useState([0,1,2])
  const goToPrevious =() => {
    setIndexArray(getPreviousSubarray())
    // console.log('indexArray',indexArray)
  }
  const goToNext =() => {
      setIndexArray(getNextSubarray())
      // console.log('indexArray',indexArray)
  }
  // Function to get the previous subarray and update the index
function getPreviousSubarray() {

  const subarray = [];

  for (let i = 0; i < 3; i++) {
    const index = (currentIndex - i + array.length) % array.length;
    subarray.unshift(array[index]);
  }

  setCurrentIndex ((currentIndex - 1 + array.length) % array.length);
  return subarray;
}
  // Function to get the next subarray and update the index
function getNextSubarray() {
  const subarray = [];
    for (let i = 0; i < 3; i++) {
    subarray.push(array[(currentIndex + i) % array.length]);
  }
  setCurrentIndex  ((currentIndex + 1) % array.length);
  return subarray;
}

return (
  <SliderWrapper className="SliderWrapper">
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
      <CardSlide 
      className='CardSlide'
      slides={slides}
      slideIndex={indexArray[0]} />
      <CardSlide 
      className='CardSlide'
      slides={slides}
      slideIndex={indexArray[1]} />
      <CardSlide
      className='CardSlide' 
      slides={slides}
      slideIndex={indexArray[2]} />

  </SliderWrapper>
)
}

export default Slider