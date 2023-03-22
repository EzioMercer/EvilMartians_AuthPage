import React from 'react';
import {RouterProvider} from 'react-router-dom';
import router from './Routes/routes';
import styles from './App.module.scss';
import Header from './Components/Header/Header';
import LoadingSpinner from './Components/LoadingSpinner/LoadingSpinner';
import useTypedSelector from './Helpers/Hooks/useTypedSelector';

const App = () => {
    const isLoading = useTypedSelector(state => state).loading;

    return(
        <div className={styles.app}>
            {isLoading && <LoadingSpinner />}
            <Header text={"EzioMercer's auth"}/>
            <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>
        </div>
    )
}

export default App;
