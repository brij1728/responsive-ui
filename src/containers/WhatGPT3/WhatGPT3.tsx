import {
  GPT3Container,
  GPT3Feature,
  GPT3Heading,
  GPT3HeadingParagraph,
  GPT3Section,
  GradientTextHeading,
} from "./GPT3Element";

import { Feature } from "../../components";

export const WhatGPT3 = () => {
  return (
    <GPT3Section>
      <GPT3Feature>
        <Feature
          title="What is GPT-3"
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."
          }
        />
      </GPT3Feature>
      <GPT3Heading>
        <GradientTextHeading>
          The possibilities are beyond your imagination
        </GradientTextHeading>
        <GPT3HeadingParagraph>Explore The Library</GPT3HeadingParagraph>
      </GPT3Heading>
      <GPT3Container>
        <Feature
          title={"Chatbots"}
          text={
            "We so opinion friends me message as delight. Whole front do of plate heard oh ought. "
          }
        />
        <Feature
          title={"Knowledgebase"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
        <Feature
          title={"Education"}
          text={
            "At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"
          }
        />
      </GPT3Container>
    </GPT3Section>
  );
};
