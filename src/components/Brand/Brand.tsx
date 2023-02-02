import { BrandImage, BrandSection } from "./BrandElement";
import { atlassian, dropbox, google, shopify, slack } from "../../assets";

export const Brand = () => {
  return (
    <BrandSection>
      <BrandImage src={google} alt="Google" />
      <BrandImage src={slack} alt="Slack" />
      <BrandImage src={atlassian} alt="Atlassian" />
      <BrandImage src={dropbox} alt="Dropbox" />
      <BrandImage src={shopify} alt="Shopify" />
    </BrandSection>
  );
};
