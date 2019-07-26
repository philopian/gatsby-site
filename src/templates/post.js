import React from "react"
import { graphql } from "gatsby"

import Header from '../components/header'

export default function Template({ data }) {
  console.log('[data]', data)
  const { markdownRemark: post } = data;
  // const post = data.markdownRemark;
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} homeButton />
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.excerpt}</p>
    </>
  )
};

export const data = graphql`
query BlogPostByPath($path: String!) {
  markdownRemark(frontmatter: {path: {eq: $path}}) {
    html
    frontmatter {
      path
      title
      excerpt
      date
    }
  }
  site {
    siteMetadata {
      title
      description
    }
  }
}
`;