import React, {Component} from 'react';
import './bikes-to-rent-item.css'



export default class BikesToRentItem extends Component{
    onLabelClick = () => {
        console.log(`Clicked to ${this.props.label}`);

    }

    render (){
        const {label,type,price,} = this.props;
    
    return (
        <span className="bikes-to-rent-item">
            <span
                 className="bikes-to-rent-item-label"
                onClick = {this.onLabelClick }
                >
                 {label} /  {type} / ${price}
                 
            </span>

            <div className="button-group">
                <button type="button"
                    className="btn btn-primary item-button">Rent
                </button>

                <button type="button"
                    className="btn btn-danger item-button">Delete
                </button>
            </div>

    
            
    
      </span>
    )
    }
    
}