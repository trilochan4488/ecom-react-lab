import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
        apiKey: "AIzaSyBXRsnvRhmLrvxt_dSDMCLUkAkn93Jc7xk",
        authDomain: "crwn-tri-db.firebaseapp.com",
        databaseURL: "https://crwn-tri-db.firebaseio.com",
        projectId: "crwn-tri-db",
        storageBucket: "crwn-tri-db.appspot.com",
        messagingSenderId: "239402453823",
        appId: "1:239402453823:web:1fb769cfff6237c391218a",
        measurementId: "G-YV7S8E7WFY"
      // Initialize Firebase
     
}

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const createUserProfileDocument = async (userAuth, additionalData ) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.id}`);

    const snapShot = await userRef.get();

    if( !snapShot.exists){
        const {displayName, email}=userAuth;
        const createdAt = new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        }catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;

