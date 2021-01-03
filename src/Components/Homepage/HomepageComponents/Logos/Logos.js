import React, { useEffect, useState } from "react";

import { useQuery } from "react-apollo";
import gql from "graphql-tag";
const EXCHANGE_RATES = gql`
  query MyQuery {
    logos {
      edges {
        node {
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  }
`;
const Logos = () => {
  const { error, data } = useQuery(EXCHANGE_RATES);
  useEffect(() => {
    if (document.querySelector(".logo"))
      document.querySelectorAll(".logo").forEach((el) => {
        el.style.width = `calc(100% / ${data.logos.edges.length})`;
      });
  });
  if (error) return <p>Error :(</p>;

  return (
    <section className="logos-section">
      <header className="logos__header">
        Mieliśmy przyjemność pracować dla:
      </header>
      <ul className="logos-list">
        {data
          ? data.logos.edges.map(function (item, i) {
              return (
                <li key={i} className="logo">
                  <img
                    className="logo__img"
                    src={item.node.featuredImage.node.sourceUrl}
                  />
                </li>
              );
            })
          : null}
      </ul>
    </section>
  );
};

export default Logos;
