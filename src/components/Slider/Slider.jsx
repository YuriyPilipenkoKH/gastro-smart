import CardSlide from "components/CardSlide/CardSlide";
import { useState } from "react";


const Slider = ({ cards }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % cards.length);
      };
    
      const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + cards.length) % cards.length);
      };
  return (
    <div className="slider">
      <button onClick={prevSlide}>Previous</button>
      <CardSlide {...cards[currentSlide]} />
      <button onClick={nextSlide}>Next</button>
    </div>
  )
}

export default Slider