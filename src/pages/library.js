import { graphql, Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../components/Layout';

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default ({ data }) => {
  return (
    <Layout>
      <IndexWrapper>
      <p>Table gang katana tank-traps euro-pop knife carbon computer Kowloon neural 8-bit corporation render-farm systemic sentient. Hacker tattoo skyscraper alcohol-ware rebar military-grade silent computer paranoid wristwatch engine pistol. 3D-printed bicycle wonton soup jeans corrupted neon youtube tattoo garage silent pen camera narrative crypto. 
      </p>
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          )
        )}
      </IndexWrapper>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;