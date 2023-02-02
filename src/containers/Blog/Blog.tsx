import { Article, ArticleProps } from "../../components";
import {
  BlogContainer,
  BlogGradientHeader,
  BlogGroupA,
  BlogGroupB,
  BlogSection,
} from "./BlogElement";
import { blog01, blog02, blog03, blog04, blog05 } from "../../assets";

import { RandomNumber } from "../../utils";

const Articles: ArticleProps[] = [
  {
    articleImage: blog01,
    articleTitle: "Blog01",
    date: "26th January 2023",
    fullLink: "Read Full Article",
  },
  {
    articleImage: blog02,
    articleTitle: "Blog02",
  },
  {
    articleImage: blog03,
    articleTitle: "Blog03",
  },
  {
    articleImage: blog04,
    articleTitle: "Blog04",
  },
  {
    articleImage: blog05,
    articleTitle: "Blog05",
  },
  {
    articleImage: blog05,
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
            articleImage={blog01}
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
