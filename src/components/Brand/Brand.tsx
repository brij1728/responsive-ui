import { Atlassian, Dropbox, Google, Shopify, Slack } from "../../assets";
import { BrandImage, BrandSection } from "./BrandElement";

export const Brand = () => {
  return (
    <BrandSection>
      <BrandImage src={Google} alt="Google" />
      <BrandImage src={Slack} alt="Slack" />
      <BrandImage src={Atlassian} alt="Atlassian" />
      <BrandImage src={Dropbox} alt="Dropbox" />
      <BrandImage src={Shopify} alt="Shopify" />
    </BrandSection>
  );
};
