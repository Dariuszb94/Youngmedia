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
  const [isMobile, changeIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", listenForResize);
    listenForResize();
    return function cleanup() {
      window.removeEventListener("resize", listenForResize);
    };
  });

  const listenForResize = () => {
    if (window.innerWidth < 1000) {
      changeIsMobile(true);
    } else {
      changeIsMobile(false);
    }
  };

  useEffect(() => {
    if (document.querySelector(".logo")) {
      if (!isMobile)
        document.querySelectorAll(".logos-list").forEach((el) => {
          el.style.gridTemplateColumns = `repeat( ${data.logos.edges.length},1fr)`;
        });
      else {
        document.querySelectorAll(".logos-list").forEach((el) => {
          el.style.gridTemplateColumns = `repeat( 2,1fr)`;
        });
      }
    }
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
