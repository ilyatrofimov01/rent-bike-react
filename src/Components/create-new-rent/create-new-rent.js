import React, {Component} from 'react';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css'

import  './create-new-rent.css';

export default class CreateNewRent extends Component{
    state ={
        label: '',
        type: "Custom",
        price: '', 
    }
    Change =(event) =>{ 
        this.setState ({type : event.value})
    }

    onLabelChangeLabel =(event) =>{
        this.setState({
            label : event.target.value
        })
    }

    onLabelChangePrice =(event) =>
    {
        this.setState({
            price : event.target.value
        })
  
    }

    onSubmit = (event) =>{
        event.preventDefault();
        this.props.onItemAdded(this.state.label,this.state.type,parseFloat(this.state.price));
    }


    render (){
        
        const options = [
             'Hill Ride',
             'Mix ride',
             'Road Ride',
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
                    className="form-control"
                    onChange ={this.onLabelChangeLabel}
                    type = "text"
                   />
               </label>
           
                <label className = 'view d-flex'>
                   Bike Type
                    <Dropdown  className ="dropdown" placeholderClassName='myPlaceholderClassName' options ={options} onChange={this.Change} value={this.state.type} placeholder="Select bicycle type" />   
                </label> 

                <form onSubmit={this.onSubmit} className ="submitForm">
                    <label className ="rentPrice" >
                        Rent Price
                        <input placeholder = "99.00"
                            className="form-control"
                            onChange ={this.onLabelChangePrice}
                            type = "text"/>
                    </label>

                    <button
                        className="btn btn-success">Submit rent
                    </button>

                </form>
            </div>
        </div>
        )
    }
}