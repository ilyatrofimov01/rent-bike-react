import React, {Component} from 'react';
import './bikes-to-rent-item.css'


export default class BikesToRentItem extends Component{

    state = {
        rent:false
    }
    onRentClick = () => {
        this.setState({
            rent:true
        })
    }

    onCencelRent = () =>{
        this.setState({
            rent:false
        })
    }

    render (){
        const {label, type, price, onDeleted/*,rent*/} = this.props;
        const {rent} = this.state
       


        if(rent === false){
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
                            className="btn btn-danger item-button"
                            onClick = {onDeleted}
                            >Delete
                        </button>
                    </div>
            </span>
            )
        } else if (rent === true) {
            

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