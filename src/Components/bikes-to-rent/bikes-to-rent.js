import React from 'react';
import BikesToRentItem from '../bikes-to-rent-item';
import './bikes-to-rent.css';

const BikesToRent = ({bikes}) =>{
    const elements = bikes.map( (item) =>{
        const{id, ...itemProps} = item;
        return (  
            <li key = {id} className ="list-group-item">
                <BikesToRentItem {...itemProps} />
            </li>
            )
    })

    return (
        <ul className ="list-group "> 
            {elements}
        </ul>
    )
}
export default BikesToRent;