import React from "react";
import { db } from "./firebase";

// export default function Temp(props) {
//   function getStuff() {
//     var stuff = db
//       .collection("requests")
//       .get()
//       .then((snapshot) => {
//         snapshot.forEach((doc) => {
//           console.log(doc);
//         });
//       });
//   }
// }
class Temp extends React.Component {
  constructor(props) {
    super(props);
  }
  clicked = () => {
    var stuff = db
      .collection("requests")
      .get()
      .then((snap) => {
        snap.forEach((doc) => {
          console.log(doc.data());
        });
      });
  };
  onClick = (e) => {
    e.preventDefault();
    this.clicked();
  };
  render() {
    const Temp = (
      <div>
        <p id="temp"></p>
      </div>
    );
    return (
      <div id="clicked">
        <button onClick={this.onClick}>Click Me</button>
      </div>
    );
  }
}
export default Temp;
