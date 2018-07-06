const functions = require('firebase-functions')
const admin = require('firebase-admin')
const generateName = require('sillyname')

admin.initializeApp(functions.config().firebase)

const db = admin.firestore()

exports.createUser = functions.auth.user().onCreate(user => {
  const collection = db.collection('users')

  return collection.doc(user.uid).set({
    displayName: generateName(),
    email: user.email,
    uid: user.uid,
  })
})
