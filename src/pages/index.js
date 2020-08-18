import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import logo from "../assets/home-logo.svg";
import "./index.css";

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      {
        htmlIntroductionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "HTML" } } }
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
        cssIntroductionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "CSS" } } }
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
        jsIntroductionQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "JS_INTRODUCTION" } } }
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
        intermediateJsQuery: allMarkdownRemark(
          filter: {
            frontmatter: { section: { eq: "INTERMEDIATE_JAVASCRIPT" } }
          }
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
        advancedJsQuery: allMarkdownRemark(
          filter: { frontmatter: { section: { eq: "ADVANCD_JAVASCRIPT" } } }
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
            <h2>HTML</h2>
            <ul>
              {props.htmlIntroductionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>CSS</h2>
            <ul>
              {props.cssIntroductionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Javascript Introduction</h2>
            <ul>
              {props.jsIntroductionQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Intermediate Javascript</h2>
            <ul>
              {props.intermediateJsQuery.edges.map(lesson => {
                const { title, path } = lesson.node.frontmatter;
                return (
                  <li key={path}>
                    <Link to={path}>{title}</Link>
                  </li>
                );
              })}
            </ul>
            <h2>Advanced Javascript</h2>
            <ul>
              {props.advancedJsQuery.edges.map(lesson => {
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
