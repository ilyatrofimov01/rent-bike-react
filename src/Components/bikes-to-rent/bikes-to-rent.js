import React from 'react';
import BikesToRentItem from '../bikes-to-rent-item';
import './bikes-to-rent.css';
import AvailableBikes from  '../available-bikes';
import  RentedBikes from '../rented-bikes';

const BikesToRent = ({bikes,onDeleted, onRentClick,onCencelRent}) =>{
    var available = bikes.filter((el) => el.rent  === false );
    var rented = bikes.filter((el) => el.rent === true );
   
    

    const availableShow = available.map( (item) =>{
        const{id, ...itemProps} = item;
        return (  
            <li key = {id} className ="list-group-item">
                <BikesToRentItem {...itemProps} 
                onRentClick  = {(item) => onRentClick(id)}
                onDeleted = { (item)=> onDeleted(id)}
                />
            </li>
            )

    })

    const rentedSow = rented.map( (item) =>{
        const{id, ...itemProps} = item;
        
        return (  
            <li key = {id} className ="list-group-item">
                <BikesToRentItem {...itemProps}
                onCencelRent = {(item) => onCencelRent(id)}

                />
            </li>
            )

    })


    return (
        <ul className ="list-group "> 
            <RentedBikes list = {rented} />
            {rentedSow}
            <AvailableBikes list = {available}/>
            {availableShow}
           
        </ul>
    )
    
}
export default BikesToRent;