import { Article, ArticleProps } from "../../components";
import { Blog01, Blog02, Blog03, Blog04, Blog05 } from "../../assets";
import {
  BlogContainer,
  BlogGradientHeader,
  BlogGroupA,
  BlogGroupB,
  BlogSection,
} from "./BlogElement";

import { RandomNumber } from "../../utils";

const Articles: ArticleProps[] = [
  {
    articleImage: Blog01,
    articleTitle: "Blog01",
    date: "26th January 2023",
    fullLink: "Read Full Article",
  },
  {
    articleImage: Blog02,
    articleTitle: "Blog02",
  },
  {
    articleImage: Blog03,
    articleTitle: "Blog03",
  },
  {
    articleImage: Blog04,
    articleTitle: "Blog04",
  },
  {
    articleImage: Blog05,
    articleTitle: "Blog05",
  },
  {
    articleImage: Blog05,
    articleTitle: "Blog05",
  },
];

export const Blog = () => {
  return (
    <BlogSection>
      <BlogGradientHeader>
        A lot is happening, We are blogging about it.
      </BlogGradientHeader>
      <BlogContainer>
        <BlogGroupA>
          <Article
            articleImage={Blog01}
            articleTitle={"Blog01"}
            date={"27th January 2023"}
            fullLink={"Read Full Article"}
          />
        </BlogGroupA>
        <BlogGroupB>
          {Articles?.map((item: ArticleProps, index) => {
            return (
              <Article
                key={`${item}-${index}-${RandomNumber}`}
                articleImage={item.articleImage}
                articleTitle={item.articleTitle}
                date={item.date}
                fullLink={item.fullLink}
              />
            );
          })}
        </BlogGroupB>
      </BlogContainer>
    </BlogSection>
  );
};
