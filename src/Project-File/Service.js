import React from "react";

const Service = () => {
  return (
    <div>
      <div className="container " id="service">
        <div className="row serviceBanner">
          <img src={require("./Images/servicebg.jpg")} alt="" />
          <div className="text-content">
            <h1>Always in our customer Favour</h1>
            <p>Who are always with tight Budget</p> 
          </div>
        </div>

        <div className="container upperCardRow">
          <div className="row col-10 mx-auto">
            <div className="col-lg-4">
              <div class="card upperCard">
                <img
                  src={require("./Images/img-s1.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h4 className="title">Ammenties Selection</h4>
                  <p>
                    It's totaly on you what you want and what you want to let it
                    go on Hotel Selection Process.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card upperCard">
                <img    
                  src={require("./Images/img-s2.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h4 className="title">Visa Ready</h4>
                  <p>
                  What it takes get your Visa Ready and other documentation necessary for travel .
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div class="card upperCard">
                <img
                  src={require("./Images/img-s3.png")}
                  class="card-img-top"
                  alt="..."
                />
                <div class="card-body">
                  <h4 className="title">Personalized Travel Plans</h4>
                  <p>
                  We have wide Varieties of Hotel & Resorts to accomodate you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* service-2 Title */}
      <div className="container">
      <div className="row service-2 col-11 mx-auto">
        <h1 className="">How Our Customers felt for Us</h1>
        <p className="">
          Who are in extreme love with friendly & inviting people
        </p>
      </div>
      </div>

      {/* {/* service-3  Row */}
      <div className="container service-3">
        <div className="row col-11 mx-auto">
          <div className="col">
            <img src={require("./Images/img-1.png")} alt="" />
            <h5>Fannie Rowe</h5>
            <p>
              It was a life Experience to visit such a beautiful cultural
              country.
            </p>
          </div>
          <div className="col">
            <img src={require("./Images/img-3.png")} alt="" />
            <h5>Lillie Summers</h5>
            <p>Just one World - Incredible!</p>
          </div>
        </div>
        <div className="row col-11 mx-auto">
          <div className="col">
            <img src={require("./Images/img-2.png")} alt="" />
            <h5>Bob Marley</h5>
            <p>Damm! I'm thinking of staying here in this World.</p>
          </div>
          <div className="col">
            <img src={require("./Images/img-4.png")} alt="" />
            <h5>Jackie Chan</h5>
            <p>
              Now, I am big fan of Power Yoga. Thanks for such a gift to this
              world.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
