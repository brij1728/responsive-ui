import {
  GradientTextHeading,
  HeaderButton,
  HeaderContent,
  HeaderEmailInput,
  HeaderImage,
  HeaderImageContainer,
  HeaderInputContent,
  HeaderPeople,
  HeaderPeopleContent,
  HeaderPeopleImg,
  HeaderSection,
  HeaderText,
} from "./HeaderElement";
import { ai, people } from "../../assets";

export const Header = () => {
  return (
    <HeaderSection>
      <HeaderContent>
        <GradientTextHeading>
          Let’s Build Something amazing with GPT-3 OpenAI
        </GradientTextHeading>
        <HeaderText>
          Yet bed any for travelling assistance indulgence unpleasing. Not
          thoughts all exercise blessing. Indulgence way everything joy
          alteration boisterous the attachment. Party we years to order allow
          asked of.
        </HeaderText>
        <HeaderInputContent>
          <HeaderEmailInput placeholder="Your Email Address"></HeaderEmailInput>
          <HeaderButton>Get Started</HeaderButton>
        </HeaderInputContent>
        <HeaderPeople>
          <HeaderPeopleImg src={people} alt="People" />
          <HeaderPeopleContent>
            1,600 people requested access a visit in last 24 hours
          </HeaderPeopleContent>
        </HeaderPeople>
      </HeaderContent>
      <HeaderImageContainer>
        <HeaderImage src={ai} alt="AI" />
      </HeaderImageContainer>
    </HeaderSection>
  );
};
