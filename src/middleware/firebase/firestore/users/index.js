import firebaseInstance from '../../index'

function getAllUsers() {
    return firebaseInstance.firebase.firestore().collection('users').get()
        .then((snapshot) => {
            const arr = [];
            snapshot.docs.forEach(doc => {
                const info = doc.data()
                arr.push(info)
            })
            return arr;
        })
}


export default {
    getAllUsers
}
