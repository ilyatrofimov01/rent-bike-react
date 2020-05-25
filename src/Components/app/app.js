import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import CreateNewRent from '../create-new-rent';
import BikesToRent from '../bikes-to-rent';



const datalist = [
    {id: 1, label:'HillrideBike',type:'Hill ride',price: 12.99, rent: false},
    {id: 2, label:'RoadrideBike',type:'Hill ride',price: 12.99, rent: false},
    {id: 3, label:'MixrideBike',type:'Hill ride',price: 12.99, rent: false},
    {id: 4, label:'SuperFastBike',type:'Hill ride',price: 12.99, rent: true}
]

    
const App = () => {
    

 return (
     <div className = "rent-app">
        <AppHeader />
        <CreateNewRent />
        <BikesToRent bikes = {datalist} onDeleted = {(id)=> console.log('del', id)}/>
     </div>
 )
}

export default App;
