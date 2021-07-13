import firebase from "firebase/app"
import 'firebase/firestore'
import 'firebase/auth'
const config={
    apiKey: "AIzaSyDYxHMNwOJ-RfrTZym6JPFxzG3keAPGzZA",
    authDomain: "crwn-db-36fe6.firebaseapp.com",
    projectId: "crwn-db-36fe6",
    storageBucket: "crwn-db-36fe6.appspot.com",
    messagingSenderId: "861375569283",
    appId: "1:861375569283:web:e282e229acf943190eeab6",
    measurementId: "G-E8G3VZVT11"
  };

export const createUserProfileDocument=async  (userAuth, additionalData)=>{
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
   


    const snapShot = await userRef.get();
  

    if(!snapShot.exists){
        const {displayName,email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch(error){
            console.log('error creating user',error.message);
        }
    }

    return userRef;


}

export const addCollectionAndDocuments=(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    const batch=firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef=collectionRef.doc();    
        batch.set(newDocRef,obj);  
    });
return batch.commit()

}
export const convertCollectionsSnapshotToMap=(collections)=>{
    const transformedCollection=collections.docs.map(doc=>{
        const {title,items}=doc.data();

        return{
            routeName:encodeURI(title.toLowerCase()),
            id:doc.id,
            title,
            items
        };
    })
        return transformedCollection.reduce((accumulator,collection)=>{
            accumulator[collection.title.toLowerCase()]=collection;
            return accumulator
        },{})
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore =firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;



