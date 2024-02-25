import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { Fade, Slide } from "react-reveal";
import { useState } from "react";
import '../../Components/PriceDetail.css'; // Import a separate CSS file for styling

const PriceDetail = ({ detail, onBack }) => {
  console.log(detail);

  const Back = (bool) => {
    onBack(bool);
    console.log('helllllo');
  }

  const details = detail.category.map((item) => {
    return (
      <div key={item.type} className="price-detail-item">
       
        <Slide right duration={1000}>
          <h2 className="item-type">{item.type}</h2>
          <h5 className="item-price">₹{item.price}/kg</h5>
        </Slide>
      </div>
    );
  });

  return (
    <div className="price-detail-container">
     <div  onClick={() => Back(false)} className="back-button">
          &#9666; Back
        </div>
      <Slide left duration={1000} distance="40px">
        <div className="image-container">
          <img style={{height:'70%',width:'80%'}} src={`images/${detail.image}`} alt={detail.title} />
          <h2 className="item-title">{detail.title}</h2>
        </div>
      </Slide>
      <div className="price-details">{details}</div>
    </div>
  );
}

export default PriceDetail;
