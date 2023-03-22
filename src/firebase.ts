// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyDHxTIbJswy09Zg9a5VXQjb9MIv5-wLrz0',
	authDomain: 'evilmartiansauth.firebaseapp.com',
	projectId: 'evilmartiansauth',
	storageBucket: 'evilmartiansauth.appspot.com',
	messagingSenderId: '586971057414',
	appId: '1:586971057414:web:2c4a564f17feb7213a2287'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
