import React from 'react'
import LoginImg from './images/signup.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

 function UserLogin() {
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


export default UserLogin

// import React from 'react'

// import loginImg from '../images/login.png'

// export default function Login() {
//   return (
//     <div className='bg-blue-300 min-h-screen flex items-center justify-center  '>
//         <div className='hidden sm:block '>
//             <img className='w-full h-full object-contain bg-blue-300' src={loginImg} alt="" />
//         </div>

//         <div className='bg-blue-300 flex flex-col justify-center'>
//             <form className='max-w-[400px] w-full mx-auto rounded-lg bg-blue-400 p-8 px-8'>
//                 <h4 className='text-2xl dark:text-white font-bold text-center'>WELCOME BACK TO WERA!</h4>
//                 <br />
//                 <h4 className='text-2xl dark:text-white font-bold text-center'>LOGIN</h4>
//                 <div className='flex flex-col text-gray-500 py-2'>
//                     <label>Email Address</label>
//                     <input className='rounded-lg bg-gray-200 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-black' type="text" />
//                 </div>
//                 <div className='flex flex-col text-gray-500 py-2'>
//                     <label>Password</label>
//                     <input className='p-2 rounded-lg bg-gray-200 mt-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none text-black' type="password" />
//                 </div>
//                 <div className='flex flex-col text-gray-500 py-2 text-black'>
//               <label>Who are you?</label>
//               <select id='users' name='users'>
//                 <option value='1'>Admin</option>
//                 <option value='2'>Recruiter</option>
//                 <option value='3'>Job Seeker</option>
//               </select>
//             </div>
                
//                 <button className='w-full my-1 py-1 bg-blue-800 text-white font-semibold rounded-lg'>Login</button>

//             </form>
//         </div>
//     </div>
//   )
// }



// import React from 'react'
// import loginImg from '../images/signup.png'
// const UserLogin = () => {
//   return (
//     // <div>UserLogin</div>
//       <div className="min-h-screen flex items-center justify-center bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
//           <div className="flex justify-center">
//             <img src={loginImg} alt="Logo" className="h-16 w-16 mb-4" /> {/* Render your logo */}
//           </div>
//           <h1 className="text-2xl font-semibold mb-6">Login</h1>
//           <form>
//             <div className="mb-4">
//               <label htmlFor="email" className="block text-gray-700 text-sm font-medium mb-2">Email</label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="Your Email"
//                 className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="password" className="block text-gray-700 text-sm font-medium mb-2">Password</label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 placeholder="Your Password"
//                 className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:border-blue-500"
//               />
//             </div>
//             <button
//               type="submit"
//               className="w-full py-2 px-4 text-white font-semibold bg-blue-500 rounded-lg hover:bg-blue-600"
//             >
//               Login
//             </button>
//           </form>
//           <div className="mt-6 text-center">
//             <a href="#" className="text-blue-500 hover:text-blue-600 text-sm font-medium">Forgot password?</a>
//           </div>
//         </div>
//       </div>
//     );
//   };
  


// export default UserLogin