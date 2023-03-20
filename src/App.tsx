import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './Routes/routes';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

const App = () => {
    return(
        <div className={styles.app}>
            <Header text={"EzioMercer's auth"}/>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
            <Footer text={'Contacts'}/>
        </div>
    )
}

export default App;
