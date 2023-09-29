import React from "react";
import { NavLink } from "react-router-dom";
import NumberCounts from "./NumberCounts";
import saly from "../assets/saly.png";

const LandingPage = () => {
  return (
    <>
      <div className="ladning-page">
        <section className="landing-header">
          <div>
            e<span>Xplisoft</span>
          </div>
          <div>
            <span>home</span>
            <span>about</span>
            <span>course</span>
            <span>blog</span>
            <span>Contact</span>
          </div>
          <div></div>
          <NavLink to="/" className="landing-nav">
            <button>Sign up</button>
          </NavLink>
        </section>
        <section className="landing-content">
          <div className="landing-about">
            <h3>START TO SUCCESS</h3>
            <h1>
              Making technology accessible <br /> to small and & medium <br />
              businesses
            </h1>
            <p>
              Explisoft offers website development services at an affordable
              price of just 10,000 rupees per year.
            </p>
          </div>
          <div className="landing-image">
            <img src={saly} alt="search-bar" />
          </div>
        </section>
      </div>
      <NumberCounts />
    </>
  );
};

export default LandingPage;
