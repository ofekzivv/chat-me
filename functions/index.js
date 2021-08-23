const functions = require("firebase-functions");
const users = require('./users');
const chat = require('./chat')
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

// users functions
exports.setUserDetails = users.setUserDetails

// chat functions
exports.setMessageToOtherUser = chat.setMessageToOtherUser