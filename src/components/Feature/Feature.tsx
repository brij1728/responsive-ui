import {
  FeatureSection,
  FeatureText,
  FeatureTitle,
  FeatureTitleBar,
  FeatureTitleContainer,
} from "./FeatureElement";

export interface FeatureProps {
  title: string;
  text?: string;
}
export const Feature: React.FC<FeatureProps> = ({
  title = "Feature",
  text = "Feature",
}) => {
  return (
    <FeatureSection>
      <FeatureTitleContainer>
        <FeatureTitleBar />
        <FeatureTitle>{title}</FeatureTitle>
      </FeatureTitleContainer>
      <FeatureText>{text}</FeatureText>
    </FeatureSection>
  );
};
