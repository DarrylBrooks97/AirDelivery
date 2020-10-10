import { db } from "./firebase";
import firebase from "firebase";
class requests {
  userSubmit(content, seatNumber) {
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
}

export { requests };
