import React from 'react'
import { Link } from "react-router-dom";

function BeforeLogin() {
  return (
    <section className="section">
            <div className="container">
              <div className="row justify-content-center">
                <div className="icon-box-item text-center col-lg-4 col-md-6 mb-4">
                  <div className="rounded shadow py-5 px-4">
                  <div className="icon"><i className="fas fa-smile"></i></div>
                    <h3 className="mb-3">Your signup was successful!</h3>
                    <p className="mb-4"><Link to="/loginform">Click here to login.</Link></p>
                  </div>
                </div>
              </div>
            </div>
          </section>
  )
}

export default BeforeLogin