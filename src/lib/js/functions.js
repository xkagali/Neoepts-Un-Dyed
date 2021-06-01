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

export function addDyeToFireBase(){
    
}