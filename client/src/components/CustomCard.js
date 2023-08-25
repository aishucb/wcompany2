import React from 'react';
import './CustomCard.css'; // Import the CSS file

const CustomCard = () => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card custom-card">
            
            <div className="card-content">
              <h5 className="card-title">Card Title</h5>
              <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ut placerat odio.</p>
              <a href="#" className="btn">Read More</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomCard;
