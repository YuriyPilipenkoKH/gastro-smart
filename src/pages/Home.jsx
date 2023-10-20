
import { Content } from "components/Content/Content";
import { HomeWrapper } from "./Page.styled";
import { SectionPlan } from "components/SectionFooter/SectionPlan";


export default function Home() {
  return (
    <HomeWrapper className="homeWrapper">
      <Content className="content" />
      <SectionPlan />
    </HomeWrapper>
  );
}
