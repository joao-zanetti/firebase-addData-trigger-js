/*
    Developed by João Zanetti
    https://github.com/joao-zanetti
*/
const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp();


exports.addMessage = functions.https.onRequest(async (req, res) => {
  const original = req.query.text;
  // Push the new message into the Realtime Database using the Firebase Admin SDK.
  const snapshot = await admin.database().ref('devicetokens').push(original);
  // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
  res.redirect(303, snapshot.ref.toString());
});

 exports.changeValue = functions.database.ref('devicetokens/{pushId}')
    .onCreate((snapshot, context) => {
      // Grab the current value of what was written to the Realtime Database.
      const original = snapshot.val();
      const newValue = 'blablabla';
      
      // Setting an other value sibling in the Realtime Database returns a Promise.
      return snapshot.ref.set({devtoken:uppercase});
    });
