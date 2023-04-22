import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoginImg from "./images/login.png";
import "bootstrap/dist/css/bootstrap.min.css";

function Login({setUser}) {
  const navigate = useNavigate();

 
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
 
  const [errors, setErrors] = useState([]);

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {     
      email_address: emailAddress,
      password: password,     
      user_type: userType,
    };
    // console.log(formData);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          
         
        if(userType=="Employer"){
          navigate("/recruiter");
          console.log(data);
        }else if(userType=="Jobseeker"){
            navigate("/jobseeker");
            setUser(data);
        }else{
            navigate("/admin-dashboard");
            console.log(data);
        }
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div className="maincontainer p-5">
      <div class="container">
        <div class="row no-gutter">
          <div class="col-md-7 d-none d-md-block bg-image me-2">
            <img className="login" src={LoginImg} alt="" />
          </div>

          <div class="col-md-4 bg-light bg-image">
            <div class="login py-5">
              <div class="col-lg-12 col-xl-10 mx-auto">
                <h4 class="display-6">WELCOME BACK TO WERA</h4>
                <p class="text-muted mb-4">Log into your account</p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div class="mb-3">
                    <input
                      id="inputEmail"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      type="email"
                      placeholder="Email Address"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div class="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="form-group col-12">
                    <label
                      htmlFor="usertype"
                      className="text-start text-primary"
                    >
                      Who are you?
                    </label>
                    <select
                      id="users"
                      name="users"
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option selected>Select</option>
                      <option>Jobseeker</option>
                      <option>Employer</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div class="d-grid gap-2 mt-2">
                    <br />

                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Log In
                    </button>
                    <ul>
                      {errors.length > 0
                        ? errors.map((err) => (
                            <li key={err} className="text-danger">
                              {err}
                            </li>
                          ))
                        : null}
                    </ul>
                    <span>
                      Not yet registered?
                      <span
                        onClick={() => {
                          navigate(`/register`);
                        }}
                        className="ms-3 text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign Up
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className="container maincontainer">
  //       <div class="container-fluid">
  //         <div class="row no-gutter">
  //           <div class="col-md-6 d-none d-md-flex bg-image">
  //             <img
  //               className="img-fluid mx-auto d-block max-height-100vh"
  //               src={LoginImg}
  //               alt=""
  //             />
  //           </div>

  //           <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
  //             <div class="container">
  //               <div class="row">
  //                 <div class="col-lg-10 col-xl-7">
  //                   <h4 class="display-6">WELCOME BACK TO WERA</h4>
  //                   <p class="text-muted mb-4">Login your account</p>
  //                   <form>
  //                     <div class="mb-3">
  //                       <input
  //                         id="inputEmail"
  //                         type="email"
  //                         placeholder="Email Address"
  //                         required=""
  //                         class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>
  //                     <div class="mb-3">
  //                       <input
  //                         id="inputPassword"
  //                         type="password"
  //                         placeholder="Password"
  //                         required=""
  //                         class="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>

  //                     <div className="flex flex-col text-black-900 py-1 form-control rounded-pill border-0 shadow-sm px-4 text-primary">
  //                       <label htmlfor="users">Who are you?</label>
  //                       <select id="users" name="users" class="form-control">
  //                         <option value="1">Admin</option>
  //                         <option value="2">Recruiter</option>
  //                         <option value="3">Job Seeker</option>
  //                       </select>
  //                     </div>
  //                     <div class="d-grid gap-2 mt-2">
  //                       <br />

  //                       <button
  //                         type="submit"
  //                         class="btn btn-primary btn-sm  text-uppercase mb-3 rounded-pill shadow-sm custom button"
  //                       >
  //                         Sign in
  //                       </button>
  //                       <h7>
  //                         Not yet registered?{" "}
  //                         <a href="http://localhost:4000/register">
  //                           <button type="button" class="btn-primary">
  //                             SIGN UP
  //                           </button>
  //                         </a>
  //                       </h7>
  //                     </div>
  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Login;

// import React from 'react'

// const UserLogin = () => {
//   return (
//     <div>UserLogin</div>
//   )
// }

// export default UserLogin
