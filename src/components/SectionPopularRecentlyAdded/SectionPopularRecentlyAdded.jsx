import { CardPopular } from "components/CardPopular/CardPopular";
import { LinePopular, LineRecently, WrapText, Wrapper } from "./SectionPopularRecentlyAdded.styled";
import { CardRecentlyAdded } from "components/CardRecentlyAdded/CardRecentlyAdded";

export const SectionPopularRecentlyAdded = () => {
  return (
    <>
      <WrapText>
        <div className="wrap-linePopular">
          <p>Popular</p>
          <LinePopular className="linePopular"></LinePopular>
        </div>
        <div className="wrap-lineRecently">
          <p>Recently added</p>
          <LineRecently className="lineRecently"></LineRecently>
        </div>
        <div className="wrap-linePopular">
          <p>Popular</p>
          <LinePopular className="linePopular"></LinePopular>
        </div>
      </WrapText>
      <Wrapper className="wrapper">
        <CardPopular />
        <CardRecentlyAdded />

        <CardPopular />
      </Wrapper>
    </>
  );
};

