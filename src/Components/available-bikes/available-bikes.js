import React from 'react';
import BikesToRent from '../bikes-to-rent';
import './available-bikes.css';

const AvailableBikes  = ({allBikes}) =>{
    const availableBikes = allBikes.filter((el) => el.rent === 'norent');
    return(
        <BikesToRent bikes = {availableBikes}/>
    )
}
export default AvailableBikes;