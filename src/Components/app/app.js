import React from 'react';
import './app.css';

import AppHeader from '../app-header';
import CreateNewRent from '../create-new-rent'

const App = () => {
 return (
     <div className = "rent-app">
        <AppHeader />
        <CreateNewRent />
     </div>
 )
}

export default App;