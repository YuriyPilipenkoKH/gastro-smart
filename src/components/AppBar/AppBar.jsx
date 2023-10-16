
import {  StyledBar} from "./AppBar.styled";





export const AppBar = () => {


     return (
      <StyledBar >
        <a href="tel:+380730000000" className="tel">
        <p>TEL:</p> <span className="telNumber">030 9144 9144</span>
         </a>
        <a href="tel:+380730000000" className="int">
        <p>INT:</p> <span className="intNumber">+49 30 9144 9144 </span>
         </a>
        
       </StyledBar>
    );
  };