import firebase from '../node_modules/firebase/app';
import '../node_modules/firebase/database';
import '../node_modules/firebase/storage';

// Initalize and export Firebase.
const config = {
    apiKey: 'xxxxxx',
    authDomain: 'xxxxx',
    databaseURL: 'https://xxxx',
    projectId: 'mrtuvn-music-collection',
    storageBucket: '',
    messagingSenderId: 'xxxxx'
};
export default firebase.initializeApp(config);
