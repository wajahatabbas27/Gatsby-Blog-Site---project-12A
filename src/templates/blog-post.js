import React from "react"
import { graphql, Link } from "gatsby"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "Do MMMM, YYYY")
      featuredImage {
        fluid(maxWidth: 750) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`;

// body {
//  json
//}

const BlogPost = props => {

    //Rich content ki image ke liye hai yh option jo parameter ke liye use hoga hmare pass.
    // const options = {
    //     renderNode: {
    //         "embedded-asset-block": node => {
    //             const alt = node.data.target.fields.title["en-US"]
    //             const url = node.data.target.fields.file["en-US"].url
    //             return <img alt={alt} src={url} />
    //         },
    //     },
    // }

    return (
        <Layout>
            <SEO title={props.data.contentfulBlogPost.title} />
            <Link to="/blog/">Visit the Blog Page</Link>
            <div className="content">
                <h1>{props.data.contentfulBlogPost.title}</h1>
                <span className="meta">
                    Posted on {props.data.contentfulBlogPost.publishedDate}
                </span>

                {props.data.contentfulBlogPost.featuredImage && (
                    <Img
                        className="featured"
                        fluid={props.data.contentfulBlogPost.featuredImage.fluid}
                        alt={props.data.contentfulBlogPost.title}
                    />
                )}

            </div>
        </Layout>
    )
}

//yh nhi chl rha hai error derha hai json ka body mein aur resolve nhi horha hai , rich content ka .
// {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}

export default BlogPost