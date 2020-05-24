import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import CreateNewRent from '../create-new-rent';
import AvailableBikes from '../available-bikes';
import RentedBikes from '../rented-bikes';



const datalist = [
    {id: 1, label:'HillrideBike',type:'Hill ride',price: 12.99, rent: 'norent'},
    {id: 2, label:'RoadrideBike',type:'Hill ride',price: 12.99, rent: 'norent'},
    {id: 3, label:'MixrideBike',type:'Hill ride',price: 12.99, rent: 'norent'},
    {id: 4, label:'SuperFastBike',type:'Hill ride',price: 12.99, rent: 'rent'}
]


const App = () => {

 return (
     <div className = "rent-app">
        <AppHeader />
        <CreateNewRent />
        <RentedBikes allBikes = {datalist}/>
        <AvailableBikes allBikes = {datalist}/>
     </div>
 )
}

export default App;
