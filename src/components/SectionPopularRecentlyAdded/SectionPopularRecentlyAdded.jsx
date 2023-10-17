import { CardPopular } from "components/CardPopular/CardPopular";
import {Wrapper} from "./SectionPopularRecentlyAdded.styled";
import { CardRecentlyAdded } from "components/CardRecentlyAdded/CardRecentlyAdded";

export const SectionPopularRecentlyAdded = () => {
  return (
    <Wrapper className="wrapper">
      <CardPopular/>
      <CardRecentlyAdded/>
     
      <CardPopular/>
    </Wrapper>
  );
};
