import firestoreChat from '../../middleware/firebase/firestore/chat'

export default {
    sendMessage: async ({state}, payload) => {
        const newRefPayloadsMessage = {}
        Object.assign(newRefPayloadsMessage, payload.message)
        const newRefPayload = {
            otherUserId: payload.otherUserId,
            message: newRefPayloadsMessage
        }
        await firestoreChat.sendMessageFromDb(newRefPayload)
    },

    getMessages: async ({commit}, uid) => {
        const messagesFromDB = await firestoreChat.getRealTimeMessages(uid)
        commit('setMessage', messagesFromDB)

    }
}