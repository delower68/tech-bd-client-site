import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const Header = () => {
  const {user, logOut, setUser}= useContext(AuthContext);

  const handelLogOut = ()=>{
    logOut()
    .then(()=>{
      setUser({})
      Swal.fire("Log out Successfully");

    })
    .catch(error => console.error(error))
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li tabIndex={0}>
                <Link to='/services' className="justify-between">Services</Link>
              </li>
              <li className="mr-2">
              <Link to='/blog'>Blog</Link>
            </li>
              {
              user?.uid?
              <><li className="mr-2">
              <Link  to='/reviews'>My review</Link>
            </li>
            <li>
              <Link to='/addService'>Add Service</Link>
            </li></>
            :
            <></>
            }
            </ul>
          </div>
          <div className="flex justify-center align-center ">
            <img
              className="h-12 mr-3 rounded-full "
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuCnotDPdObqmGk-JlQvXM8hYmli-FJr4_cQ&usqp=CAU"
              alt=""
            />
            <div className="lg:mt-1 ">
            <h1 className=" text-2xl ">Tech- BD</h1>
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li className="mr-2">
              <Link to='/'>Home</Link>
            </li>
            <li className="mr-2">
              <Link to='/services'>Services</Link>
            </li>
            {
              user?.uid?
              <><li className="mr-2">
              <Link to='/reviews'>My review</Link>
            </li>
            <li className="mr-2">
              <Link to='/addService'>Add Service</Link>
            </li></>
            :
            <></>
            }
            <li className="mr-2">
              <Link to='/blog'>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user?.uid?
            <div>
              <Link to='/login' onClick={handelLogOut} className="btn mr-2">Log Out</Link>
            </div>
            :
            <div>
              <Link to='/register' className="btn mr-1">Sign Up</Link>
              <Link to='/login' className="btn">Log In</Link>
            </div>

          }
        </div>
      </div>
    </div>
  );
};

export default Header;
