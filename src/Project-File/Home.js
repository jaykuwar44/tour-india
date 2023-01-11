import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import Place from "./Place";
import Service from "./Service";

const Home = () => {
  return (
    <div>
      <div className="container-fluid ">
        <div className="col-12 FirstBanner">
          <img src={require("./Images/bgimg-1.jpg")} alt="" />
          <div className="text-content">
            <p>BE THE PART OF THIS WONDERFUL JOURNEY</p>
            <h1>Incredible India!</h1>
            <button className="col-4 btn mx-auto">EXPLORE NOW</button>
          </div>
        </div>
      </div>
      <br />
      <Place />
      <div className="container">
        <div className="row col-sm-10 col-11 mx-auto midNav">
          <div className="col">
            <Link to=" ">All</Link>
          </div>
          <div className="col">
            <Link to="north">North</Link>
          </div>
          <div className="col">
            <Link to="central">CENTRAL</Link>
          </div>
          <div className="col">
            <Link to="north-eastern">NORTH-EASTERN</Link>
          </div>
          <div className="col">
            <Link to="south">SOUTH</Link>
          </div>
        </div>
        <Outlet />
      </div>
      <br />
      <Service />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
