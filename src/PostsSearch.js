import React, { useEffect, useState } from "react";
import { useQuery } from "react-apollo";
import gql from "graphql-tag";
const EXCHANGE_RATES = gql`
  query MyQuery {
    offers {
      edges {
        node {
          title
          content
          price {
            price
          }
        }
      }
    }
  }
`;
const PostsSearch = () => {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);
  const [offers, offersChange] = useState();
  useEffect(() => {
    offersChange(data);
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {offers ? console.log(offers.offers.edges[0].node.title) : null}{" "}
      {offers
        ? offers.offers.edges.map(function (item, i) {
            return <li key={i}>{item.node.title}</li>;
          })
        : null}
    </div>
  );
};

export default PostsSearch;
