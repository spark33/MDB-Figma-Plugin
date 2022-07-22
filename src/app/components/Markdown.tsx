import React from 'react';
import ReactMarkdown from 'react-markdown';
import { H1, H2, H3, Subtitle, Body, Link } from '@leafygreen-ui/typography';

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

interface Props {
  content: string;
}

const Markdown = ({ content }: Props) => {
  return <ReactMarkdown children={content} components={componentOptions} />;
};

export default Markdown;
