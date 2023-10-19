
import { Content } from "components/Content/Content";
import { HomeWrapper } from "./Page.styled";


export default function Home() {
  return (
    <HomeWrapper className="homeWrapper">
      <Content className="content" />
    </HomeWrapper>
  );
}
