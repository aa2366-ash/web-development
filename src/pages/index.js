import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import logo from "../assets/home-logo.svg";
import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        introductionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "Introduction" } } }
          sort: { order: ASC, fields: [frontmatter___order] }
        ) {
          edges {
            node {
              frontmatter {
                title
                path
                section
                order
              }
            }
          }
        }
      }
    `}
    render={props => {
      return (
        <div>
          <div>
            <h1>Table of contents</h1>
            <h2>Introduction</h2>
            <ul>
              {props.introductionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <img className="home-logo" src={logo} alt="" aria-hidden="true" />
        </div>
      );
    }}
  />
);

export default IndexPage;
