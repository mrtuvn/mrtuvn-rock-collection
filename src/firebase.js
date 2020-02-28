import firebase from '../node_modules/firebase/app';
import '../node_modules/firebase/database';
import '../node_modules/firebase/storage';

// Initalize and export Firebase.
const config = {
    apiKey: 'AIzaSyD2QEKNa5MPDYCO2Ui6r9EJRNf9E_33xDY',
    authDomain: 'mrtuvn-music-collection.firebaseapp.com',
    databaseURL: 'https://mrtuvn-music-collection.firebaseio.com',
    projectId: 'mrtuvn-music-collection',
    storageBucket: 'mrtuvn-music-collection.appspot.com',
    messagingSenderId: '742619806435',
    appId: '1:742619806435:web:12e439c56ccf14164de3d6'
};
export default firebase.initializeApp(config);
