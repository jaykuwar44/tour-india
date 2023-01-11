import React from "react";
import { Link, Outlet } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container-fluid about">
        <div className="row">
          <div className="first">
            <h1>Know about us!</h1>
            <p>Here you will find whats our motto and mission is</p>
          </div>
        </div>

        <div className="col-8 mx-auto second">
          {/* <div className=""> */}
          <h2>About Tour India</h2>
          <p>
            We have wide Varieties of Hotel & Resorts to accomodate you. 3D4N or
            15D16N totally upto you.
          </p>
          <ul>
            <li>Ammenties Selection for every price options</li>
            <li>Visa Ready - we got you everything covered</li>
            <li>Personalized Travel Plans section bachelors to couples</li>
            <li>
              Minimal custom duties and charges so you are free to explore your
              own unique options{" "}
            </li>
          </ul>
          {/* </div> */}
        </div>
        <div className="col-8 mx-auto">
          <div className="third">
            <h2>Services we offer</h2>
            <p>
              We offer cutomized plans as well as specially framed packages to
              accomodate you for the wonderful experience you're going to
              experience while travelling in Incredible India. We are always
              with you with our 24x7 cutomer support on online as well as on
              call. We're always there when you need us. Have a Life remembering
              Journey with our Hotels and Accomodation Partner all over the
              country of delights and culture.
            </p>
          </div>
        </div>
        <div className="col-8 mx-auto">
          <div className="third">
            <h2>Contact us</h2>
            <p>Phone Number. +91 9XXXXXXXXX</p>
            <p>Fax : XXXXXXXXXXX</p>
            <p>Email : help@tourindia.com</p>
          </div>
        </div>
      </div>
      <div className="row last bg-dark">
        <p className="">Copyright © Tour India</p>
      </div>

      <Link to="all">All</Link>
      <Outlet />
    </div>
  );
};

export default About;
