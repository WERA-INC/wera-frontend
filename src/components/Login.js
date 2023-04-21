import React from 'react'
import LoginImg from './images/signup.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

 function Login() {
  return (
    <div className="container maincontainer">
    <div class="container-fluid">
        <div class="row no-gutter">
           
            <div class="col-md-6 d-none d-md-flex bg-image">
            <img className='img-fluid mx-auto d-block max-height-100vh' src={LoginImg} alt="" />
            </div>
            
            <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
               
                   
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-7">
                                <h4 class="display-6">WELCOME BACK TO WERA</h4>
                                <p class="text-muted mb-4">Login your account</p>
                                <form>
                                    <div class="mb-3">
                                        <input id="inputEmail" type="email" placeholder="Email Address" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    <div class="mb-3">
                                        <input id="inputPassword" type="password" placeholder="Password" required="" class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                    </div>
                                    
                                    <div className='flex flex-col text-black-900 py-1 form-control rounded-pill border-0 shadow-sm px-4 text-primary'>
                                     <label htmlfor='users'>Who are you?</label>
                                     <select id='users' name='users' class='form-control'>
                                       <option value='1'>Admin</option>
                                       <option value='2'>Recruiter</option>
                                       <option value='3'>Job Seeker</option>
                                     </select>
                                   </div>
                                    <div class="d-grid gap-2 mt-2">
                                      <br/>
                                     
                                    <button type="submit" class="btn btn-primary btn-sm  text-uppercase mb-3 rounded-pill shadow-sm custom button">Sign in</button>
                                    <h7>Not yet registered? <a href='http://localhost:4000/register'><button type='button' class="btn-primary">SIGN UP</button></a></h7>
                                    </div>
                                    
                                    
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
 
    );
}


export default Login

// import React from 'react'

// const UserLogin = () => {
//   return (
//     <div>UserLogin</div>
//   )
// }

// export default UserLogin