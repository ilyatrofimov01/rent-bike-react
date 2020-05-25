import React from 'react';
import './rented-bikes.css';


const RentedBikes =({list}) =>{

    
    var avgPrice = 0;
    list.forEach(el => {
        avgPrice += el.price;
    });

    return(
        <div className = "rentedBikes">
        <h2><span role ="img" aria-label="rent">&#x1F929; Your rent (Total :${avgPrice})</span></h2>
        </div>
    )
}

export default RentedBikes;