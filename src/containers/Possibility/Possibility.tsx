import {
  PossibilityContent,
  PossibilityGradientText,
  PossibilityImage,
  PossibilityImageContainer,
  PossibilitySection,
  PossibilitySubHeading,
  PossibilitySubtext,
  PossibilityText,
} from "./PossibilityElement";

import { PossibilityImg } from "../../assets";

export const Possibility = () => {
  return (
    <PossibilitySection>
      <PossibilityImageContainer>
        <PossibilityImage src={PossibilityImg} alt={"Possibility Image"} />
      </PossibilityImageContainer>
      <PossibilityContent>
        <PossibilitySubtext>
          Request Early Access to Get Started
        </PossibilitySubtext>
        <PossibilityGradientText>
          The possibilities are beyond your imagination
        </PossibilityGradientText>
        <PossibilityText>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </PossibilityText>
        <PossibilitySubHeading>
          Request Early Access to Get Started
        </PossibilitySubHeading>
      </PossibilityContent>
    </PossibilitySection>
  );
};
