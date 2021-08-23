const functions = require('firebase-functions');
const admin = require('firebase-admin');

exports.setMessageToOtherUser = functions.firestore.document(`conversation/{senderId}/data/{addresseeId}/messages/{messageId}`)
    .onCreate((snap, context) => {

        const obj = {...snap.data()}
        const {senderId, addresseeId, messageId} = context.params // user that send the message
        obj.fromMe = false;
        console.log(obj);

        if(obj.from === senderId) {
            admin.firestore().collection('conversation').doc(addresseeId).collection('data')
                .doc(senderId).collection('messages').doc(messageId).set(obj)
                .then(r => console.log("Duplicate message by functions: " + r))
                .catch(e => {
                    console.log(e)
                    console.error(e)
                })
        }
    });