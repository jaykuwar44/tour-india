import React from 'react'

const NorthEastern = () => {
  return (
    <div>
      <div className="container mt-5">
      <div className="row placeIn">
      <div className="col-md-4 col-11 mx-auto px-3">
                <div className="card">
                  <img
                    src={require('./Images/twang.jpg')}
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
                    src={require('./Images/Mon.jpg')}
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
                    src={require('./Images/umngott.jpg')}
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
  )
}

export default NorthEastern