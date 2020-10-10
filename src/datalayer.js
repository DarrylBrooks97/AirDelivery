import { db } from "./firebase";
import firebase from "firebase";

function userSubmit(content, seatNumber) {
  db.collection("requests")
    .add({
      created: firebase.firestore.FieldValue.serverTimestamp(),
      request: content,
      seat: seatNumber,
    })
    .then(() => {
      alert("Success!");
    })
    .catch(() => {
      alert("Failed");
    });
}

function getNewRequests(callback) {
  db.collection("requests")
    .orderBy("created", "desc")
    // .onSnapshot()
    .onSnapshot(function (querySnapshot) {
      var data = [];
      querySnapshot.forEach(function (doc) {
        data.push(doc.data());
      });
      console.log({ data });
      callback(data);
    });
  // .catch(function (error) {
  //   console.log("Error getting documents: ", error);
  // });
}

export { userSubmit, getNewRequests };
