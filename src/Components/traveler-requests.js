import React, { useState, useEffect } from "react";
import { getNewRequests } from "../datalayer";
import "../App.css";
function TravelRequestsPage() {
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    getNewRequests(setRequestList);
  }, []);

  return (
    <div>
      <div>
        {requestList?.map(({ request }, idx) => (
          // Create Flight Attendant Component
          <div className="request" key={idx}>
            {request}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TravelRequestsPage;
