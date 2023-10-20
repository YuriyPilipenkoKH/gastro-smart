import { HomeWrapper } from "./Page.styled";
import { SectionPlan } from "components/SectionPlan/SectionPlan";
import { Content } from "components/Content/Content";



export default function Home() {

    return (
      <HomeWrapper  >
       <Content/>
        <SectionPlan/>
      </HomeWrapper>
    );
  }