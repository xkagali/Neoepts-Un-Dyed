import firebase from "./firebase";
import "firebase/auth";
const db = firebase.firestore();

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

export function addVoteToFirebase(itemID, vote, userID){
    if(vote){
        db.collection("itemsList").doc(itemID).update({totalVotes: vote})
            .then(succ=>{
            }).catch(err=>{
        })

        db.collection("userList").doc(userID).update({
            votedItems: firebase.firestore.FieldValue.arrayUnion(itemID)
        })
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
        }).catch(()=>{
    })
}

export function deleteDyeFromFirebase(item, temp){
    db.collection('itemsList').doc(item.id).update({
        dyesList: firebase.firestore.FieldValue.arrayRemove(temp)
    }).then(()=>{
    }).catch((error)=>{
        console.log(error)
    })
}

export function getUser(callbackUser){
    db.collection('userList').doc(firebase.auth().currentUser.uid)
        .get().then((doc) => {
        if (doc.exists) {
            let temp = {
                displayName: doc.data().displayName,
                uid: doc.data().uid,
                votedItems: doc.data().votedItems
            }
            callbackUser(temp)
        } else {
            // doc.data() will be undefined in this case
            console.log("No such user!");
        }
    }).catch((error) => {
        console.log("Error getting user:", error);
    });
}