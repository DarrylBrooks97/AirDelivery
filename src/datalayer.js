import { db } from "./firebase";
import firebase from "firebase";

function userSubmit(content, seatNumber) {
  db.collection("requests")
    .add({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      request: content,
      seat: seatNumber,
      approved: false,
    })
    .then(() => {
      alert("Success!");
    })
    .catch(() => {
      alert("Failed");
    });
}
function approvedRequest(id) {
  var requestRef = db.collection("requests").doc(id);
  // Set the "capital" field of the city 'DC'
  return requestRef
    .update({
      approved: true,
    })
    .then(function () {
      console.log("Document successfully updated!");
    })
    .catch(function (error) {
      // The document probably doesn't exist.
      console.error("Error updating document: ", error);
    });
}

function getNewRequests(callback) {
  db.collection("requests")
    .orderBy("created", "desc")
    .onSnapshot(function (querySnapshot) {
      var data = [];
      querySnapshot.forEach(function (doc) {
        data.push({ ...doc.data(), id: doc.id });
      });
      callback(data);
    });
}

export { userSubmit, getNewRequests, approvedRequest };
