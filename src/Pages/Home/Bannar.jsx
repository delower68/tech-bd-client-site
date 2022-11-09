import React from "react";
import { Link } from "react-router-dom";
import image from "../../asset/undraw_Youtube_tutorial_re_69qc.png";

const Bannar = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Let's Get more Info of Tech</h1>
            <p className="py-6">
            Tech BD is a Bangladesh based online portal where content <br />  are based on technical feature. Here i just selling <br />  the some info  of Technology on YouTube.
            </p>
            <div>
              <ul>
                <li> | </li>
                <li> | </li>
                <Link to="/">
                  <button className="btn btn-primary my-2">Let's Go</button>
                </Link>
                <li> | </li>
                <li> | </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={image}
              className="w-full h-64 rounded-lg shadow-2xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
