import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Register({ setStoredToken }) {
  const navigate = useNavigate();

  const [errors, setErrors] = useState([]);
  const [searchParams, _] = useSearchParams();
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {
      password: password,
      full_name: fullName,
      email_address: emailAddress,
      password_confirmation: confirmPassword,
      user_type: searchParams.get("user-type"),
    };
    // console.log(formData);
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          navigate("/login");
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <main className="container px-3 py-16">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-md-7 d-none d-md-block me-2">
            <img className="" src={"/images/signup.jpg"} alt="" />
          </div>

          <div className="col-md-4 bg-light">
            <div className="login py-3">
              <div className="col-lg-12 col-xl-10 mx-auto">
                <h4 className="display-6">WELCOME TO WERA</h4>
                <p className="text-muted mb-4">Create an account</p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div className="mb-3">
                    <input
                      id="inputText"
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="Full Name"
                      autofocus=""
                      className="form-control rounded-pill border-0 shadow-sm px-4"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputEmail"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      type="email"
                      placeholder="Email Address"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>

                  <div className="d-grid gap-2 mt-3">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#143C66] text-white btn-block text-uppercase rounded-pill shadow-sm"
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
                        style={{ cursor: "pointer" }}
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
    </main>
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
