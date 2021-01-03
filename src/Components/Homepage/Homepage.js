import React, { useEffect, useState } from "react";
import "./HomepageStyle.css";
import Banner from "./HomepageComponents/Banner/Banner";
import Logos from "./HomepageComponents/Logos/Logos";

const Homepage = () => {
  return (
    <section className="homepage">
      <Banner />
      <hr className="separator" />
      <Logos />
    </section>
  );
};

export default Homepage;
