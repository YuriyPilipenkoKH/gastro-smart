import { iconTime, iconCkal } from "images/icons";
import {  Wrap, WrapSlogan, WrapperCard, WrapperSpan } from "./CardRecentlyAdded.styled";
import chak_s from "../../images/imgslides/chak-chak-s.jpg";
export const CardRecentlyAdded = () => {
  return (
    <WrapperCard className="wrapper-card">
     
        <Wrap  className="wrap">
          
            <img src={chak_s} alt="chak" />
        
          <WrapSlogan className="wrap-slogan">
            <WrapperSpan className="wrapper-span">
              <div className="time">
                {iconCkal}
                <span>30 minutes</span>
              </div>
              <div className="ckal">
                {iconTime}
                <span>716 kcal</span>
              </div >
            </WrapperSpan>
            <p>
            The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish...
            </p>
          </WrapSlogan>
        </Wrap>
        <Wrap  className="wrap">
          
            <img src={chak_s} alt="chak" />
        
          <WrapSlogan className="wrap-slogan">
            <WrapperSpan className="wrapper-span">
              <div className="time">
                {iconCkal}
                <span>30 minutes</span>
              </div>
              <div className="ckal">
                {iconTime}
                <span>716 kcal</span>
              </div >
            </WrapperSpan>
            <p>
            The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish...
            </p>
          </WrapSlogan>
        </Wrap>
        <Wrap  className="wrap">
          
            <img src={chak_s} alt="chak" />
        
          <WrapSlogan className="wrap-slogan">
            <WrapperSpan className="wrapper-span">
              <div className="time">
                {iconCkal}
                <span>30 minutes</span>
              </div>
              <div className="ckal">
                {iconTime}
                <span>716 kcal</span>
              </div >
            </WrapperSpan>
            <p>
            The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish...
            </p>
          </WrapSlogan>
        </Wrap>
        <Wrap  className="wrap">
          
            <img src={chak_s} alt="chak" />
        
          <WrapSlogan className="wrap-slogan">
            <WrapperSpan className="wrapper-span">
              <div className="time">
                {iconCkal}
                <span>30 minutes</span>
              </div>
              <div className="ckal">
                {iconTime}
                <span>716 kcal</span>
              </div >
            </WrapperSpan>
            <p>
            The Cutest Roundest Pancake Balls You’ll Ever Make and Eat: Danish...
            </p>
          </WrapSlogan>
        </Wrap>
                 
    </WrapperCard>
  );
};