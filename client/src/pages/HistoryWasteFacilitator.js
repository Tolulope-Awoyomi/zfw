import React from 'react';
import { Link } from 'react-router-dom';

function HistoryWasteFacilitator() {
  return (
    <div>
      <section className="page-header bg-tertiary">
        <div className="container">
          <div className="row">
            <div className="col-8 mx-auto text-center">
              <h2 className="mb-3 text-capitalize">Food Waste History</h2>
              <ul className="list-inline breadcrumbs text-capitalize" style={{ fontWeight: 500 }}>
                <li className="list-inline-item"><Link to="/wastefacilitator">Waste Facilitator Services</Link></li>
                <li className="list-inline-item">/ &nbsp; <Link to="#">Food Waste History</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="content">
                <table className="TableOfContents">
                  <thead>
                    <tr>
                      <th>Column 1</th>
                      <th>Column 2</th>
                      <th>Column 3</th>
                      <th>Column 4</th>
                      <th>Column 5</th>
                      <th>Column 6</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Map through your data to populate table rows */}
                    <tr className="cart-item">        
                      <td>Populate Text</td>
                      <td>Populate Text</td>        
                      <td>Populate Text</td>  
                      <td>Populate Text</td>  
                      <td>Populate Text</td>  
                      <td>Populate Text</td>      
                    </tr>
                    {/* Repeat for each item in your data */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HistoryWasteFacilitator;
