import React from "react";

const All = () => {
  return (
    <div>
      {/* cols-1 cols-sm-4  */}
      <div className="container mt-5">
        <div className="row placeIn">
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/gold-temple.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <a href="">
                <h4 className="title">Goldern Temple</h4>
              </a>
              <p className="text">Punjab</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>

          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/twang.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Twang</h4>
              <p className="text">Arunachal Pradesh</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/Gwalior-Fort.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Gwalior Fort</h4>
              <p className="text">Madhya Pradesh</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
        </div>
        <br />
        <div className="row placeIn">
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/goa.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Colva Beach</h4>
              <p className="text">Goa</p>
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
              />
            </div>
            <div className="card-body">
              <h4 className="title">Camel Safari</h4>
              <p className="text">Rajasthan</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/umngott.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Umngot river</h4>
              <p className="text">Meghalaya</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
        </div>
        <br />
        <div className="row placeIn">
          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/hampi.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Hampi</h4>
              <p className="text">Karnataka</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>

          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/Vivekananda_Rock.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Vivekananda Rock Memorial</h4>
              <p className="text">Tamil Nadu</p>
            </div>
          </div>

          <div className="col-md-4 col-11 mx-auto px-3">
            <div className="card">
              <img
                src={require("./Images/Mehrangarh-Fort.jpg")}
                class="card-img-top"
                alt="..."
              />{" "}
            </div>
            <div className="card-body">
              <h4 className="title">Mehrangarh Fort</h4>
              <p className="text">Rajasthan</p>
              <br />
              <h4 className="title"></h4>
              <p className="text"></p>
            </div>
          </div>
        </div>
        <br />
        <div class="row placeIn">
          <div class="col-md-4 col-11 mx-auto px-3">
            <div class="card">
              <img
                src={require("./Images/alleppey.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="text-center">Alleppey</h5>
                <p class="card-text">Kerala</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-11 mx-auto px-3">
            <div class="card">
              <img
                src={require("./Images/sanchi-stupa.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="text-center">Sanchi Stupa</h5>
                <p class="card-text">Madhya Pradesh</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-11 mx-auto px-3">
            <div class="card">
              <img
                src={require("./Images/Mon.jpg")}
                class="card-img-top"
                alt="..."
              />
              <div class="card-body">
                <h5 class="text-center">Mon</h5>
                <p class="card-text">Myanmar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default All;
