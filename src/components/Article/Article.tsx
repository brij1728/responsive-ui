import {
  ArticleContainer,
  ArticleDate,
  ArticleImage,
  ArticleLink,
  ArticleSection,
  ArticleTitle,
} from "./ArticleElement";

export interface ArticleProps {
  articleImage: string;
  articleTitle: string;
  date?: string;
  fullLink?: string;
}

export const Article: React.FC<ArticleProps> = ({
  articleImage,
  articleTitle,
  date,
  fullLink,
}) => {
  return (
    <ArticleSection>
      <ArticleImage src={articleImage} alt={articleTitle} />
      <ArticleContainer>
        <ArticleDate>{date}</ArticleDate>
        <ArticleTitle>{articleTitle}</ArticleTitle>
        <ArticleLink>{fullLink}</ArticleLink>
      </ArticleContainer>
    </ArticleSection>
  );
};
