import React from "react";

export default function Website() {
  return (
    <div>
      <h1 className=" text-center text-danger text-capitalize my-5">
        Welcome to My Channel
      </h1>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <div class="card">
              <img
                src="https://picsum.photos/200/301"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body text-lg-start ">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://picsum.photos/201/300"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body text-lg-start">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
          <div className="col">
            <div class="card">
              <img
                src="https://picsum.photos/200/300"
                class="card-img-top"
                alt="..."
                height="200px"
              />
              <div class="card-body text-lg-start">
                <h5 class="card-title">Card title</h5>
                <p class="card-text ">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
