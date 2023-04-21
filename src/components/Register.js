import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignupImg from "./images/signup.jpg";
import "bootstrap/dist/css/bootstrap.min.css";

function Register({ setStoredToken }) {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
   const [errors, setErrors] = useState([]);

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {
      full_name: fullName,
      email_address: emailAddress,
      password: password,
      password_confirmation: confirmPassword,
      user_type: userType,
    };
    // console.log(formData);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if(response.ok){
          response.json().then(data=>{
            console.log(data);
            navigate('/login')
          })
        }else{
          response.json().then((err) => setErrors(err.errors));
        }
      })
  };

  return (
    <div className="maincontainer p-5">
      <div class="container">
        <div class="row no-gutter">
          <div class="col-md-7 d-none d-md-block bg-image me-2">
            <img className="" src={SignupImg} alt="" />
          </div>

          <div class="col-md-4 bg-light bg-image">
            <div class="login py-3">
              <div class="col-lg-12 col-xl-10 mx-auto">
                <h4 class="display-6">WELCOME TO WERA</h4>
                <p class="text-muted mb-4">Create an account</p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div class="mb-3">
                    <input
                      id="inputText"
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="Full Name"
                      autofocus=""
                      class="form-control rounded-pill border-0 shadow-sm px-4"
                      required
                    />
                  </div>
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
                  <div class="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm Password"
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
                    </select>
                  </div>
                  <div class="d-grid gap-2 mt-3">
                   

                    <button
                      type="submit"
                      class="btn btn-primary btn-block text-uppercase rounded-pill shadow-sm"
                    >
                      Sign up
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
                      Already have an account?
                      <span
                      style={{"cursor":"pointer"}}
                        onClick={() => {
                          navigate(`/login`);
                        }}
                        className="ms-3 text-primary"
                      >
                        Log In
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
}

export default Register;

// import React from 'react'

// const UserSignUp = () => {
//   return (
//     <div>UserSignUp</div>
//   )
// }

// export default UserSignUp
