export default {
    setUserIdOnChat: ((state, uid) => state.otherUserId = uid),
    setMessage: ((state, messages) => state.allMessages = messages),
    setMessageToAllMessages:((state,message) => state.allMessages.push(message)),

    setImage:((state,image) => state.image = image),
    setImageUrl:((state,imageUrl) => state.imageUrl = imageUrl),
    setViewImage:((state,imageUrl) => state.viewImage = imageUrl),
}