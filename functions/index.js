// The Cloud Functions for Firebase SDK to create Cloud Functions and set up triggers.
const functions = require('firebase-functions');
 
// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
admin.initializeApp();
 
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello, World!");
  });
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    console.log("hey")
    
    const writeResult = await admin.database().ref().child("alldata").push().set({'name':'vikash',age:20})
    
    res.json({result: `Message with ID:   added.`});
  });
exports.makeUppercase = functions.database.ref('/alldata/{pushId}/age')
    .onCreate(async (snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
console.log("listening value:"+original)

  
    });