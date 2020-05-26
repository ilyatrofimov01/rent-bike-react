import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

import  './create-new-rent.css';

export default class CreateNewRent extends Component{
    state ={
        value: "Custom"
    }
    Change =(event) =>{
        this.setState ({value : event.value})
        console.log(event.value);
    }

    render (){
        
        const options = [
             'HillRide',
             'Mixride',
             'RoadRide',
             'Custom',
             'BMX',
        ];
        


        return (
        <div className="new-rent">
            <h2><span role ="img" aria-label="money">&#x1F911;</span> Create new rent</h2>
            <div className = "rent-container d-flex">
               <label className = 'view d-flex'>
                   Bike name
                   <input placeholder = "Ex.Cannonride S6"
                    type = "text"
                   />
               </label>

               <label className = 'view d-flex'>
                   Bike Type
                    <Dropdown  className ="dropdown" placeholderClassName='myPlaceholderClassName' options ={options} onChange={this.Change} value={this.state.value} placeholder="Select bicycle type" />
                    
                    </label> 

               <label className = 'price view d-flex'>
                   Rent Price
                   <input placeholder = "99.00"
                   type = "text"
                   />
               </label>

               <button type="button"
                    className="btn btn-success">Submit rent</button>
            </div>
        </div>
        )
    }
}