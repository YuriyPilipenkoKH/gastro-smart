
import { Section, SectionFooterButton, SectionFooterCaption, SectionFooterText, SectionFooterTitle } from "./SectionPlan.styled"

export const SectionPlan = ( )=> {
  return (
<Section className="section">
  <SectionFooterTitle className="section-footer__title">Try to plan your recipe personally.</SectionFooterTitle>
  <SectionFooterText className="section-footer__text">You liked our recipe, but would you like to plan it for any number of portions,<br/>calculate prices and publish menu lines online?</SectionFooterText>
  <SectionFooterCaption className="section-footer__caption">Then please sign-up for a free trial of gastrosmart.</SectionFooterCaption>
  <SectionFooterButton className="section-footer__btn" type="button">Try Free Trial</SectionFooterButton>
</Section>

  )
}
