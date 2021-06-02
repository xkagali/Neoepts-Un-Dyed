import firebase from "./firebase"
const db = firebase.firestore()

export function getItemsFromFirebase(callback){
    db.collection("itemsList").orderBy("name")
        .onSnapshot(querySnapshot =>{
            let allItems = []
            querySnapshot.forEach(doc=>{
                allItems.push({...doc.data(), id: doc.id})
            })
            callback(allItems)
        })
}

export function addVoteToFirebase(itemID, vote){
    if(vote){
        db.collection("itemsList").doc(itemID).update({totalVotes: vote})
            .then(succ=>{
            }).catch(err=>{
        })
    }
}

export function addDyeToFireBase(dyeSub, itemID){
    db.collection("itemsList").doc(itemID).update({
        dyesList: firebase.firestore.FieldValue.arrayUnion(dyeSub)
    })
        .then(()=>{
            console.log("success")
        }).catch(()=>{
        console.log("error")
    })
}

export function createAccount(email, password){
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            let user = userCredential.user;
            // ...
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });
}

export function loginAuth(email,password){
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}