import React, { useContext, useState } from 'react';
import { UserContext } from "./context/user";
import { useNavigate, Link } from "react-router-dom";
import { Error } from "../styles";

function LoginForm() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [errorsList, setErrorsList] = useState([]);
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault();
      
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ 
            name: name, 
            password: password
          })
        })
        .then(res => res.json())
        .then(user => {
          if (!user.errors) {
            login(user);
            if (user.category === "Food Business") {
              navigate("/foodbusiness");
            } else if (user.category === "Food Requestor") {
              navigate("/foodrequestor")
            } else {
              navigate("/wastefacilitator")
            }
          } else {
            setName("");
            setPassword("");
            const errorListItems = user.errors.map((error, index) => (
              <p key={index}>{error}</p>
            ));
            setErrorsList(errorListItems);
          }
        });
      }
      
      return (
        <div className="container">
            <div className="shadow rounded p-5 bg-white">
                <div className="row">
                <div className="col-12 text-center mb-4">
            <h4>Login Page</h4>
          </div>
          <div className="col-lg-6 mx-auto">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4 pb-2">
                  <label htmlFor="contact_name" className="form-label">User Name</label>
                  <input 
                    type="text" 
                    className="form-control shadow-none" 
                    id="contact_name" 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-4 pb-2">
                  <label htmlFor="contact_password" className="form-label">Password</label>
                  <input 
                    type="password" 
                    className="form-control shadow-none" 
                    id="contact_password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button className="btn btn-primary w-100" type="submit">Login</button>
                <div className="form-group mb-4 pb-2">
                  <ul className="list-unstyled">
                    {/* <li className="mb-2"><Link to="/forgot-password">Forgot password?</Link></li> */}
                    <li className="mb-2"><Link to="/signup">A New User?</Link></li>
                  </ul>
                </div>
              </form>
            </div>
            {errorsList.length > 0 && (
              <Error className="alert alert-danger" role="alert">
                {errorsList.map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </Error>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
    
    export default LoginForm;
    