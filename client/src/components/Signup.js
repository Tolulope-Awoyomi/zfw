import React, { useContext, useState } from 'react';
import { UserContext } from "./context/user";
import { useNavigate, Link } from "react-router-dom";
import { Error } from "../styles";

function Signup() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState("");
    const [phone_number, setPhone_number] = useState("");
    const [address, setAddress] = useState("");
    const [category, setCategory] = useState("Food Business");
    const [errorsList, setErrorsList] = useState([]);
    const { signup } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
    
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            password: password,
            password_confirmation: passwordConfirmation,
            phone_number: phone_number,
            address: address,
            category: category
          }),
        })
        .then(res => res.json())
        .then(user => {
            if (!user.errors) {
                signup(user)
                navigate('/welcome')
            } else {
                const errorLis = user.errors.map(e => <p key={e}>{e}</p>)
                setErrorsList(errorLis)
            }
        })
      }

      return (
        <div className="container">
            <div className="shadow rounded p-5 bg-white">
                <div className="row">
                <div className="col-12 text-center mb-4">
            <h4>Signup Page</h4>
        </div>
        <div className="col-lg-6 mx-auto">
            <div className="contact-form"></div>
                <form onSubmit={handleSubmit}>
                <div className="form-group mb-4 pb-2">
                    <label htmlFor="name" className="form-label">Name </label> 
                    <input
                        type="text"
                        className="form-control shadow-none"
                        id="name"
                        autoComplete="off"
                        placeholder="Enter your name..."
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    /> <br />  
                </div>
    
                <div className="form-group mb-4 pb-2">
                    <label htmlFor="email" className="form-label">Email Address </label> 
                    <input
                        type="email"
                        className="form-control shadow-none"
                        id="email"
                        autoComplete="off"
                        placeholder="Enter your email address..."
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    /> <br /> 
                </div>
         
                <div className="form-group mb-4 pb-2">
                    <label htmlFor="password" className="form-label">Password </label> 
                    <input
                        type="password"
                        className="form-control shadow-none"
                        id="password"
                        autoComplete="new-password"
                        placeholder="Enter your password..."
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}  
                    /> <br /> 
                </div>
          
                <div className="form-group mb-4 pb-2">
                    <label htmlFor="password" className="form-label">Password Confirmation </label>
                    <input
                        type="password"
                        className="form-control shadow-none"
                        id="password_confirmation"
                        autoComplete="new-password"
                        placeholder="Confirm your password..."
                        value={passwordConfirmation}
                        onChange={(e) => setPasswordConfirmation(e.target.value)}
                    /> <br />
                </div>
          
                <div className="form-group mb-4 pb-2">
                <label htmlFor="phone_number" className="form-label">Phone Number </label>
                <input
                    type="text"
                    className="form-control shadow-none"
                    id="phone_number"
                    autoComplete="off"
                    placeholder="Enter your phone number..."
                    value={phone_number}
                    onChange={(e) => setPhone_number(e.target.value)}
                /> <br />
                </div>
    
                <div className="form-group mb-4 pb-2">
                    <label htmlFor="address" className="form-label">Address </label> 
                    <textarea
                        id="address"
                        className="form-control shadow-none"
                        placeholder="Enter your address..."
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    /> <br />
                </div>

                <div className="form-group mb-4 pb-2">
                <label htmlFor="category" className="form-label">Select Your Category</label>
                    <select
                        id="category"
                        className="form-control shadow-none"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                    >
                        <option value="">Select Your Category</option>
                        <option value="Food Business">Food Business</option>
                        <option value="Food Requestor">Food Requestor</option>
                        <option value="Waste Facilitator">Waste Facilitator</option>
                    </select>
                </div>
                    <button type="submit" className="btn btn-primary w-100">Create Account</button>
                    {errorsList.length > 0 && (
                      <Error className="alert alert-danger" role="alert">
                        {errorsList.map((error, index) => (
                          <p key={index}>{error}</p>
                        ))}
                      </Error>
                    )}
                    <div className="form-group mb-4 pb-2">
                  {/* {<ul className="list-unstyled">
                    <li className="mb-2"><Link to="/forgot-password">Forgot password?</Link></li>
                    <li className="mb-2"><Link to="/loginform">Already have an account?</Link></li>
                  </ul>} */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    
  );
}
    export default Signup;









        
        