import React, {Component} from 'react';
import './bikes-to-rent-item.css'


export default class BikesToRentItem extends Component{

    state = {
        rent:"norent"
    }
    onRentClick = () => {
        this.setState({
            rent:'rent'
        })
    }

    onCencelRent = () =>{
        this.setState({
            rent:'norent'
        })
    }

    render (){
        const {label,type,price/*,rent*/} = this.props;
        const {rent} = this.state
       


        if(rent === "norent"){
            return (
                <span className="bikes-to-rent-item">
                    <span
                        className="bikes-to-rent-item-label"
                        >
                        {label} /  {type} / ${price}
                        
                    </span>
                    
                    <div className="button-group">
                        <button type="button"
                            onClick = {this.onRentClick }
                            className="btn btn-primary item-button">Rent
                        </button>

                        <button type="button"
                            className="btn btn-danger item-button">Delete
                        </button>
                    </div>
            </span>
            )
        } else if (rent === 'rent') {
            

            return(

                <span className="bikes-to-rent-item">
                        <span
                            className="bikes-to-rent-item-label"
                            >
                            {label} /  {type} / ${price}
                            
                        </span>
                        
                        <button type="button"
                            className="btn btn-danger item-button"
                            onClick = {this.onCencelRent}>Cencel rent
                        </button>
            
                </span>
            )
        }
    }
    
}