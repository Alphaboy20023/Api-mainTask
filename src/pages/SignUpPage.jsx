import React from "react";
import { NavLink } from "react-router-dom";
import { FiUser } from "react-icons/fi";
// import { FaEyeSlash } from "react-icons/fa";
import { FaAt } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";
import { useState } from "react";
import Carousels from "../components/carousel";


function SignUpPage(params) {

   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function onchangeemail(e){
      setEmail(e.target.value)
   }

   function onchangepassword(e){
      setPassword(e.target.value)
   }   


   function handlesubmit(e){
      e.preventDefault()
      console.log(password,email )
   }

    return (
       <>
         <div className="d-flex lgpage border-3">
           <div className="bg-light d-flex signuppage">
           <div className="manpics">
           <Carousels />
           </div>
            <div className="bg-light logindetails">
               <div className=" logincontent">
               <h1 className="fs-2">Create Your free account</h1>
               <p className="text-left">Already Have an account? <NavLink to="/">Login</NavLink></p>

               <form onSubmit={handlesubmit}>
               <div className="loginbox ">
               <div className="row rowes justify-content-center py-4 g-3">
               <div className="col-md-6 border-bottom">
                  <label htmlFor="inputFirstName4" className="form-label fs-4 text-secondary">First Name</label>
                  <div className="d-flex">
                     <input type="FirstName" className="control border-0 bg-transparent" id="inputFirstName2" />
                     <FiUser className="fs-4 d-inline-flex ms-lg-auto text-secondary "/>
                  </div>
               </div>
               <div className="col-md-5 border-bottom">
                  <label htmlFor="inputLastName4" className="form-label fs-4 text-secondary">Last Name</label>
                  <div className="d-flex">
                     <input type="LastName" className="control border-0 bg-transparent" id="inputFirstName2" />
                     <FiUser className="fs-4 ms-lg-auto d-inline-flex text-secondary "/>
                  </div>
               </div>
               <div className="col-md-11 border-bottom">
                  <label htmlFor="inputEmail4" className="form-label fs-4 text-secondary">E-mail</label>
                  <div className="d-flex">
                     <input type="email" onChange={onchangeemail} className="control border-0 bg-transparent" id="inputEmail2" required/>
                     <FaAt className="fs-4 d-inline-flex ms-lg-auto text-secondary"/>
                  </div>
               </div>
               <div className="col-md-11 border-bottom">
                  <label htmlFor="inputpassword4" className="form-label fs-4 text-secondary">Password</label>
                  <div className="d-flex">
                     <input type="password" onChange={onchangepassword} className="control is-valid  border-0 bg-transparent" id="inputPassword2 validationServer01" required />
                     {/* <FaEyeSlash className="fs-4 ms-lg-auto d-inline-flex text-secondary"/> */}
                     <FaEye className="fs-4 ms-lg-auto d-inline-flex text-secondary"/>
                  </div>
               </div>
               </div>
               <div className="col-12">
                   <NavLink to="/products" className="btn btn-success d-flex justify-content-center continuebtn ms-lg-auto" type="submit">Create Account</NavLink>
               </div>
               </div>
               </form>
               </div>
            </div>
           </div>
        </div>
       </>
    )
};

export default SignUpPage;