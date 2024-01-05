// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfigDev = {
	apiKey: "AIzaSyDRXCChICL3jqt5CDf0GvKMa-5dR-lUF_A",
	authDomain: "auth-dev-b18fc.firebaseapp.com",
	projectId: "auth-dev-b18fc",
	storageBucket: "auth-dev-b18fc.appspot.com",
	messagingSenderId: "1076484783249",
	appId: "1:1076484783249:web:2778e92a5c50c419925330"
};

const firebaseConfigProd = {
	apiKey: "AIzaSyBHhf_mRbZ6LAvQknb_Xv6N3RERhr__8Yk",
	authDomain: "auth-prod-f4430.firebaseapp.com",
	projectId: "auth-prod-f4430",
	storageBucket: "auth-prod-f4430.appspot.com",
	messagingSenderId: "969393081041",
	appId: "1:969393081041:web:7243d0d1d5a642bd3853f0"
}

const firebaseConfig = IS_PRODUCTION ? firebaseConfigProd : firebaseConfigDev;

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export default app;
