import React from 'react';
import BikesToRent from '../bikes-to-rent';
import './rented-bikes.css';


const RentedBikes =({allBikes}) =>{
    const rentedBikes = allBikes.filter((el) => el.rent === 'rent');
    var avgPrice = 0;
    rentedBikes.forEach(el => {
        avgPrice += el.price;
    });
    return(
        <div className = "rentedBikes">
        <h2><span role ="img" aria-label="rent">&#x1F929; Your rent (Total :${avgPrice})</span></h2>
        <BikesToRent bikes = {rentedBikes}/>
        </div>
    )
}

export default RentedBikes;