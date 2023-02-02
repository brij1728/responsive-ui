import {
  FooterAddress,
  FooterButton,
  FooterCompany,
  FooterContainer,
  FooterContainerLogo,
  FooterCopyRight,
  FooterHeading,
  FooterHeadingContainer,
  FooterLinks,
  FooterLogo,
  FooterLogoText,
  FooterSection,
  FooterSubHeading,
  FooterText,
} from "./FooterElement";

import { logo } from "../../assets";

export const Footer = () => {
  return (
    <FooterSection>
      <FooterHeadingContainer>
        <FooterHeading>
          Do you want to step in to the future before others
        </FooterHeading>
        <FooterButton>Request Early Access</FooterButton>
      </FooterHeadingContainer>
      <FooterContainer>
        <FooterContainerLogo>
          <FooterLogo src={logo} alt={"Logo"} />
          <FooterLogoText>
            Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved
          </FooterLogoText>
        </FooterContainerLogo>
        <FooterLinks>
          <FooterSubHeading>Links</FooterSubHeading>
          <FooterText>Overons</FooterText>
          <FooterText>Social Media</FooterText>
          <FooterText>Counters</FooterText>
          <FooterText>Contact</FooterText>
        </FooterLinks>
        <FooterCompany>
          <FooterSubHeading>Company</FooterSubHeading>
          <FooterText>Terms and Conditions</FooterText>
          <FooterText>Privacy Policy</FooterText>
          <FooterText>Contact</FooterText>
        </FooterCompany>
        <FooterAddress>
          <FooterSubHeading>Get In Touch</FooterSubHeading>
          <FooterText>Crechterwoord K12 182 DK Alknjkcb</FooterText>
          <FooterText>085-132567</FooterText>
          <FooterText>info@payme.net</FooterText>
        </FooterAddress>
      </FooterContainer>
      <FooterCopyRight>
        <FooterText>© 2021 GPT-3. All rights reserved.</FooterText>
      </FooterCopyRight>
    </FooterSection>
  );
};
