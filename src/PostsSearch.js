import React, { useEffect } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    documents {
      edges {
        node {
          id
          title
        }
      }
    }
  }
`;
const PostsSearch = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  useEffect(() => {
    console.log(data);
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return <div></div>;
};

export default PostsSearch;
