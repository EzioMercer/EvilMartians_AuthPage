// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigDev = {
	apiKey: 'AIzaSyDwYOVoUpihBHPbTQtrwDRyt-UHmsnPytI',
	authDomain: 'evilmartiansauth-dev.firebaseapp.com',
	projectId: 'evilmartiansauth-dev',
	storageBucket: 'evilmartiansauth-dev.appspot.com',
	messagingSenderId: '474027087835',
	appId: '1:474027087835:web:d2b74fb762f9e2e57d79fe'
};

const firebaseConfigProd = {
	apiKey: 'AIzaSyDV7VOgiNqO49tu_Yi2h80-xPHNBtsKLHw',
	authDomain: 'evilmartiansauth-prod.firebaseapp.com',
	projectId: 'evilmartiansauth-prod',
	storageBucket: 'evilmartiansauth-prod.appspot.com',
	messagingSenderId: '448827019514',
	appId: '1:448827019514:web:0a1b07fe649af84c887943'
}

const firebaseConfig = IS_PRODUCTION ? firebaseConfigProd : firebaseConfigDev;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
