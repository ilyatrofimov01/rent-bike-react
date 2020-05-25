import React, {Component} from 'react';
import './bikes-to-rent-item.css'


export default class BikesToRentItem extends Component{

    // onCencelRent = () =>{
    //     this.setState({
    //         rent:false
    //     })
    // }

    render (){
        const {label, type, price, onDeleted, onRentClick, onCencelRent/*rent*/} = this.props;
        //const {rent} = this.state
       // const rent = this.rent
       // console.log(this.props.rent)
       


        if(this.props.rent === false){
            return (
                <span className="bikes-to-rent-item">
                    <span
                        className="bikes-to-rent-item-label"
                        >
                        {label} /  {type} / ${price}
                        
                    </span>
                    
                    <div className="button-group">
                        <button type="button"
                            onClick = {onRentClick}
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
        } else if (this.props.rent === true) {
            

            return(

                <span className="bikes-to-rent-item">
                        <span
                            className="bikes-to-rent-item-label"
                            >
                            {label} /  {type} / ${price}
                            
                        </span>
                        
                        <button type="button"
                            className="btn btn-danger item-button"
                            onClick = {onCencelRent}>Cencel rent
                        </button>
            
                </span>
            )
        }
    }
    
}