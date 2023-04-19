import React, {useState} from 'react'
import SignupImg from './images/signup.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

 function UserSignUp() {

    const [fullName, setFullName] = useState("")
    const [emailAddress, setEmailAddress] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    async function Register()
    {
        let item={fullName,emailAddress,password,confirmPassword}
        console.warn(item)

        let result= await fetch("http://localhost:3000/login",{
            method: "POST",
            body:JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                "Accept":'application/json'
            }
        })
        result = await result.json()
        console.warn("result",result)
    }
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
                                <form>
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
                                     
                                    <button type="submit" class="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>
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