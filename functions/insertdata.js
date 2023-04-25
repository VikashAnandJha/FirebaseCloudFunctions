// The Firebase Admin SDK to access Firestore.
const admin = require('firebase-admin');
const functions = require('firebase-functions');
admin.initializeApp({databaseURL:'http://127.0.0.1:4000'});
var db = admin.database();
var ref = db.ref("restricted_access/secret_document");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});