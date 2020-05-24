import React from 'react';
import BikesToRent from '../bikes-to-rent';
import './available-bikes.css';

const AvailableBikes  = ({allBikes}) =>{
    const availableBikes = allBikes.filter((el) => el.rent === 'norent');
    const quantity = availableBikes.length;
    return(
        <div className = "AvailableBikes">
        <h2><span role ="img" aria-label="money">&#x1F6B2; Available bycicles ({quantity})</span></h2>
        <BikesToRent bikes = {availableBikes}/>
        </div>
    )
}
export default AvailableBikes;