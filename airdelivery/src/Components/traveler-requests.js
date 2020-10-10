import React, { useState, useEffect } from "react";
import { requests } from "../datalayer";

function TravelRequestsPage() {
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    let requestArr = [];
    async function getRequests() {
      const request = new requests();
      let querySnapshot = await request.getNewRequests();
      querySnapshot.forEach(function (doc) {
        if (doc.data().created !== undefined) {
          requestArr.push([
            doc.id,
            doc.data().created,
            doc.data().request,
            doc.data().seat,
          ]);
        }
      });
      setRequestList(requestArr);
    }
    getRequests();
  }, []);

  return (
    <div>
      <div>
        {requestList.map((request, key) => (
          // Create Flight Attendant Component
          <div key={key}>{request[3]}</div>
        ))}
      </div>
    </div>
  );
}

export default TravelRequestsPage;
