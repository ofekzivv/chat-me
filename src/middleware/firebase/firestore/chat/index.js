import firebaseInstance from '../../../firebase'
import {fabFontAwesomeLogoFull} from "@quasar/extras/fontawesome-v5";

async function sendMessageFromDb(newRefPayload) {
    newRefPayload.message.messageId = await (firebaseInstance.firebase.firestore().collection('test').doc().id)
    await firebaseInstance.firebase.firestore().collection('conversation').doc(window.user.uid)
        .collection('data').doc(newRefPayload.otherUserId).collection('messages')
        .doc(newRefPayload.message.messageId).set(newRefPayload.message)
        .catch(error => console.log('sendMessageFromDb', error))
}

async function getAllMessages(otherUserUid) {
    let messageArr = [];
    await firebaseInstance.firebase.firestore().collection('conversation').doc(window.user.uid)
        .collection('data').doc(otherUserUid).collection('messages').get()
        .then((res) => {
            res.forEach(doc => {
                const message = doc.data()
                messageArr.push(message)
            })
        }).catch(err => console.error(err))
    return messageArr
}

async function getRealTimeMessages(otherUserUid) {
    let messageArrRT = [];
    await firebaseInstance.firebase.firestore().collection('conversation')
        .doc(window.user.uid).collection('data').doc(otherUserUid).collection('messages')
        .orderBy('createdAt', 'asc').onSnapshot(snap => {
            snap.docChanges().forEach(change => {
                if (change.type === "added") {
                    messageArrRT.push(change.doc.data())
                }
            })
        })
    return messageArrRT
}

export default {
    sendMessageFromDb,
    getRealTimeMessages,
    getAllMessages,
}