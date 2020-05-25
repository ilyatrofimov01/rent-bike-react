import React from 'react';
import BikesToRentItem from '../bikes-to-rent-item';
import './bikes-to-rent.css';
import AvailableBikes from  '../available-bikes';
import  RentedBikes from '../rented-bikes';

const BikesToRent = ({bikes,onDeleted}) =>{
    console.log(bikes);
    var available = bikes.filter((el) => el.rent  === false );
    var rented = bikes.filter((el) => el.rent === true );
    console.log(available,rented);
    

    const availableShow = available.map( (item) =>{
        const{id, ...itemProps} = item;
        
        return (  
            <li key = {id} className ="list-group-item">
                <BikesToRentItem {...itemProps}
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
                onDeleted = { (item)=> onDeleted(id)}
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