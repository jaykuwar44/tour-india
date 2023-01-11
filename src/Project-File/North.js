import React from "react";

const North = () => {
  return (
    <div>
      <div className="container mt-5">
        <div className="row placeIn">
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/Mehrangarh-Fort.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title"></h4>
              <p className="text"></p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>

          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/gold-temple.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title"></h4>
              <p className="text"></p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>

          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/Camel-Safari.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title"></h4>
              <p className="text"></p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default North;
