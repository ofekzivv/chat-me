const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setUserDetails = functions.auth.user().onCreate((user)=> {
    admin.firestore().collection('users').doc(user.uid).set({uid: user.uid, email: user.email, name: user.displayName})
        .then((r) => console.log(r))
        .catch(e => console.log(e));
})