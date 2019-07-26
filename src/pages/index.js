import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import { StaticQuery, graphql } from 'gatsby'


const getAllPosts = graphql`
query{
  allMarkdownRemark(
    limit:10
    sort: {fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { published: {eq: true}} }
    ) {
    edges {
      node {
        frontmatter {
          title
          path
          date
          excerpt
          published
        }
      }
    }
  }
}
`;

const styles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: 'avenir'
}
const Blogs = ({ data }) => {
  const { edges: blogPosts } = data.allMarkdownRemark
  return (
    <div styles={styles}>
      {blogPosts.map(blog => {
        const date = blog.node.frontmatter.date
        const title = blog.node.frontmatter.title
        return (<li key={`${date}__${Math.random()}`}>
          {date} - {title}  <Link to={blog.node.frontmatter.path}>Go to post</Link>
        </li>)
      })}
    </div>
  )
}

const Body = () => {
  return (
    <StaticQuery
      query={getAllPosts}
      render={data => <Blogs data={data} />}
    />
  )
}

const IndexPage = () => (
  <Layout>
    <h2>Blog Posts:</h2>
    <ul>
      <Body />
    </ul>
  </Layout>
)
export default IndexPage
/*
  <Layout>
    <Header />
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
*/