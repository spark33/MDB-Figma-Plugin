import React from 'react';
import ReactMarkdown from 'react-markdown';
import { H1, H2, H3, Subtitle, Body, Link } from '@leafygreen-ui/typography';
import { css, cx } from '@leafygreen-ui/emotion';

interface MarkdownProps {
  content: string;
  className?: string;
}

const componentOptions = {
  p: Body,
  a: ({ children }) => <Link>{children}</Link>,
  li: ({ children }) => (
    <Body>
      <li>{children}</li>
    </Body>
  ),
  h1: ({ children }) => <H1>{children}</H1>,
  h2: ({ children }) => <H2>{children}</H2>,
  h3: ({ children }) => <H3>{children}</H3>,
  h4: ({ children }) => <Subtitle>{children}</Subtitle>,
};

const markdownStyles = css`
  padding: 8px 0;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 12px 0px 4px 0px;
  }
  p {
    margin: 12px 0;

    img {
      margin: 20px 0;
    }
  }

  ul {
    padding-left: 24px;

    p {
      margin: 8px 0;
    }
  }
`;

const Markdown = ({ content, className, ...rest }: MarkdownProps) => {
  return (
    <ReactMarkdown
      children={content}
      components={componentOptions}
      className={cx(className, markdownStyles)}
      {...rest}
    />
  );
};

export default Markdown;
