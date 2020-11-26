import firebase from 'firebase'
var firebaseConfig = {
    apiKey: "AIzaSyChVizAaSGVBsedEg4lnDoGJ3DIM0qba8Q",
    authDomain: "trello-clone-914ea.firebaseapp.com",
    databaseURL: "https://trello-clone-914ea.firebaseio.com",
    projectId: "trello-clone-914ea",
    storageBucket: "trello-clone-914ea.appspot.com",
    messagingSenderId: "726440652381",
    appId: "1:726440652381:web:c25fd1375b8cbd2c3467b4",
    measurementId: "G-W93CYHDCMC"
};
firebase.initializeApp(firebaseConfig);
export default firebase;