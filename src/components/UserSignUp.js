import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import SignupImg from './images/signup.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

 function UserSignUp({ setStoredToken}){
    const navigate = useNavigate();

    const [fullName, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    
    const signUpFunctionality = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          fullName,
          emailAddress,
          password,
          confirmPassword,

        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.jwt) {
          localStorage.setItem("token", data.jwt);
          console.log(data);
          setStoredToken(data.jwt);
          navigate("/");
        } else {
          alert("Please fill out all fields");
        }
      });
  };

  return (
    <div className="container maincontainer">
    <div class="container-fluid">
        <div class="row no-gutter">
           
            <div class="col-md-6 d-none d-md-flex bg-image">
            <img className='img-fluid max-width-100% d-block max-height-100vh' src={SignupImg} alt="" />
            </div>
            
            <div class="col-md-6 bg-light">
                <div class="login d-flex align-items-center justify-content-center py-5">
                   
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7">
                                <h4 class="display-6">WELCOME TO WERA</h4>
                                <p class="text-muted mb-4">Signup your account</p>
                                <form onSubmit={signUpFunctionality}>
                                    <div class="mb-3">
                                        <input id="inputText" onChange={(e) => setFullName(e.target.value)} type="text" placeholder="Full Name" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                    </div>
                                    <div class="mb-3">
                                        <input id="inputEmail" onChange={(e) => setEmailAddress(e.target.value)} type="email" placeholder="Email Address" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    <div class="mb-3">
                                        <input id="inputPassword" onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    <div class="mb-3">
                                        <input id="inputPassword" onChange={(e) => setConfirmPassword(e.target.value)} type="password" placeholder="Confirm Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    <div className='flex flex-col text-black-900 py-1 form-control rounded-pill border-0 shadow-sm px-4 text-primary'>
                                     <label for='users'>Who are you?</label>
                                     <select id='users' name='users' class='form-control'>
                                     <input id="inputText" type="text" placeholder="Admin" required="" autofocus="" class="form-control rounded-pill border-0 shadow-sm px-4" />
                                       <option value='1'>Admin</option>
                                       <option value='2'>Recruiter</option>
                                       <option value='3'>Job Seeker</option>
                                     </select>
                                   </div>
                                    <div class="d-grid gap-2 mt-2">
                                      <br/>
                                     
                                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign up</button>
                                    <h7>Already have an account? <a href='http://localhost:4000/userlogin'><button type='button' class="btn-primary">LOGIN</button></a></h7>
                                    </div>
                                    
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
    );
}


export default UserSignUp

// import React from 'react'

// const UserSignUp = () => {
//   return (
//     <div>UserSignUp</div>
//   )
// }

// export default UserSignUp