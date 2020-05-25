import React from 'react';
import './available-bikes.css';

const AvailableBikes  = ({list}) =>{
    
    const quantity = list.length;

    return(
        <div className = "AvailableBikes">
        <h2><span role ="img" aria-label="money">&#x1F6B2; Available bycicles ({quantity})</span></h2>
        </div>
    )
}
export default AvailableBikes;