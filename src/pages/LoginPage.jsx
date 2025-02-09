import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaAt, FaEye } from "react-icons/fa";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../redux/authSlice";

function LoginPage() {
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const { error, status} = useSelector((state) => state.auth);

   const [username, setusername] = useState('');
   const [password, setPassword] = useState('');
   const [loading, setLoading] = useState(false); // New loading state

   function onchangeusername(e) {
      setusername(e.target.value);
   }

   function onchangepassword(e) {
      setPassword(e.target.value);
   }

   function handlesubmit(e) {
      e.preventDefault();
      setLoading(true);
      dispatch(logIn({ username, password }));
   }

   useEffect(() => {
      if (status === 'succeeded') {
         setLoading(false);
         navigate('/products');
      }
      if (status === 'failed') {
         setLoading(false);
         alert(error || 'Login failed. Please check your credentials');
      }
   }, [status, error, navigate]);

   return (
      <>
         <div className="d-flex lgpage border-3">
            <div className="bg-light d-flex signuppage">
               <div className="manpics"></div>
               <div className="bg-light logindetails">
                  <div className="logincontent">
                     <h1 className="fs-2">Login</h1>
                     <p className="text-left">Don't Have an account?<NavLink to="/SignUpPage"> Sign up</NavLink></p>

                     <form onSubmit={handlesubmit}>
                        <div className="loginbox">
                           <div className="row rowes justify-content-center py-4 g-3">
                              <div className="col-md-11 border-bottom">
                                 <label htmlFor="inputEmail4" className="form-label fs-4 text-secondary">Username</label>
                                 <div className="d-flex">
                                    <input type="text" onChange={onchangeusername} className="control border-0 bg-transparent" />
                                    <FaAt className="fs-4 d-inline-flex ms-lg-auto text-secondary" />
                                 </div>
                              </div>
                              <div className="col-md-11 border-bottom">
                                 <label htmlFor="inputpassword4" className="form-label fs-4 text-secondary">Password</label>
                                 <div className="d-flex">
                                    <input type="password" onChange={onchangepassword} className="control is-valid border-0 bg-transparent" id="inputPassword4"/>
                                    <FaEye className="fs-4 ms-lg-auto d-inline-flex text-secondary" />
                                    {/* <FaEyeSlash className="fs-4 ms-lg-auto d-inline-flex text-secondary"/> */}
                                 </div>
                              </div>
                           </div>
                           <div className="col-12">
                              <button className="btn btn-success d-flex justify-content-center continuebtn ms-lg-auto" type="submit" disabled={loading}>
                                 {loading ? <div className="spinner-border" role="status">
                                    <span className="visually-hidden">loading...</span>
                                 </div> : 'Continue'}
                              </button>
                           </div>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default LoginPage;
