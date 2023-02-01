import {
  CTAButton,
  CTAButtonContainer,
  CTAContent,
  CTAHeading,
  CTAParagraph,
  CTASection,
} from "./CTAElement";

export const CTA = () => {
  return (
    <CTASection>
      <CTAContent>
        <CTAParagraph>Request Early Access to Get Started</CTAParagraph>
        <CTAHeading>
          Register today & start exploring the endless possiblities.
        </CTAHeading>
      </CTAContent>
      <CTAButtonContainer>
        <CTAButton>Get Started</CTAButton>
      </CTAButtonContainer>
    </CTASection>
  );
};
