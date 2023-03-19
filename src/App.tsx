import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './Routes/routes';
import './App.module.scss'
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
    return(
        <>
            <Header text={'Header'}/>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
            <Footer text={'Footer'}/>
        </>
    )
}

export default App;
