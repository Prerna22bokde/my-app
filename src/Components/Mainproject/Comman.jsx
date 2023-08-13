import React from "react";
import web from "../Mainproject/images/img2.png";
import "./Main.css";
import { NavLink } from "react-router-dom";

export default function Comman(props) {
  return (
    <div>
      <section id="header" className="">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="home-one col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    {props.name}
                    <strong className="brand-name"> ThapaTechnical</strong>
                  </h1>
                  <h2 className="my-3">
                    We are the team of taleted devloper making website
                  </h2>
                  <div className="mt-3">
                    <NavLink
                      to={props.visite}
                      className="btn btn-outline-primary"
                    >
                      {props.btnname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="animated img-fluid "
                    alt="homeimg"
                    width="500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
