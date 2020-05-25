import React , {Component} from 'react';
import './app.css';

import AppHeader from '../app-header';
import CreateNewRent from '../create-new-rent';
import BikesToRent from '../bikes-to-rent';

 

    
export default class App extends Component {



    state = {
        datalist: [
            {id: 1, label:'HillrideBike',type:'Hill ride',price: 12.99, rent: false},
            {id: 2, label:'RoadrideBike',type:'Hill ride',price: 12.99, rent: false},
            {id: 3, label:'MixrideBike',type:'Hill ride',price: 12.99, rent: false},
            {id: 4, label:'SuperFastBike',type:'Hill ride',price: 12.99, rent: false}
        ]
    }

    deleteItem = (id) => {
        this.setState(({datalist}) => {
            const index = datalist.findIndex((el) => el.id === id);


            const newArray = [
                ...datalist.slice(0,index),
                ...datalist.slice(index+1)
            ];
            
            return{
                datalist : newArray
            }

        }) 

    }

    changeRent = (id) => {
        this.setState(({datalist}) => {
            const index = datalist.findIndex((el) => el.id === id);
            const element = datalist.find((el) => el.id === id);
            element.rent = !element.rent;
            const changedRent = [
                ...datalist.slice(0,index),
                element,
                ...datalist.slice(index+1)
            ];

            return {
                datalist: changedRent
            }
        })
    }

    render(){


        return (
            <div className = "rent-app">
               <AppHeader />
               <CreateNewRent />
               <BikesToRent bikes = {this.state.datalist}
                onDeleted = {this.deleteItem} 
                onRentClick = {this.changeRent}
                onCencelRent = {this.changeRent}
                />
            </div>
        );

    }
 
}


