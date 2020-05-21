import React from 'react';

import  './create-new-rent.css';

const CreateNewRent = () =>{
    return (
        <div>
            <h2>Create new rent</h2>
            <div className = "rent-container d-flex">
               <label className = 'view d-flex'>
                   Bike name:
                   <input placeholder = "Ex.Cannonride S6"
                    type = "text"
                   
                   />
               </label>

               <label className = 'view d-flex'>
                   Bike Type:
                   <input/>
               </label> 

               <label className = 'view d-flex'>
                   Rent Price:
                   <input/>
               </label>

               <button type="submit"
                    className="btn btn-success">Submit</button>
            </div>
        </div>
    )
}

export default CreateNewRent;