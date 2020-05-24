import React from 'react';

import  './create-new-rent.css';

const CreateNewRent = () =>{
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
                   <input/>
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

export default CreateNewRent;