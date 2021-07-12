import firebaseInstance from '../../index';
import auth from 'firebase/auth'

async function facebook() {
    var provider = new firebaseInstance.firebase.auth.FacebookAuthProvider();
    await firebaseInstance.firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            window.user = result.user
        })
        .catch((err) => {
            var errorCode = err.code;
            var errorMessage = err.message;
            var email = err.email;
            var credential = err.credential;
            console.error(err)
        });
}

async function google() {
    const provider = new firebaseInstance.firebase.auth.GoogleAuthProvider();
    await firebaseInstance.firebase.auth().signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            window.user = result.user
        })
        .catch((err) => {
            var errorCode = err.code;
            var errorMessage = err.message;
            var email = err.email;
            var credential = err.credential;
            console.error(err)
        });
}

async function logInEmailPassword(email, password) {
    await firebaseInstance.firebase.auth().signInWithEmailAndPassword(email, password)
        .then((result) => {
            window.user = result.user
        })
        .catch((err) => {
            alert(err)
            var errorCode = err.code;
            var errorMessage = err.message;
            console.error(err)
        });
}

async function registerUser(email, password, userName) {
    await firebaseInstance.firebase.auth().createUserWithEmailAndPassword(email, password)
    debugger
    await updateUserProfile(userName)
        .catch((error) => {
            var errorMessage = error.message;
            console.error(error)
        });
}

async function updateUserProfile(userName) {
    let user = firebaseInstance.firebase.auth().currentUser
    await user.updateProfile({displayName: userName})
    await firebaseInstance.firebase.firestore().collection('users').doc(user.uid).update({name: user.displayName})
        .then(() => console.log(user))
        .catch((error) => console.error(error))
}

async function LogOut() {
    await firebaseInstance.firebase.auth().signOut().then(() => {})
        .catch((error) => {
            console.error(error)
        });
}


export default {
    facebook,
    google,
    logInEmailPassword,
    registerUser,
    LogOut,
    updateUserProfile
}
