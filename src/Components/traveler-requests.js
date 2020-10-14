import React, { useState, useEffect } from "react";
import { getNewRequests, approvedRequest } from "../datalayer";
import "../App.css";
function TravelRequestsPage() {
  const [requestList, setRequestList] = useState([]);

  useEffect(() => {
    getNewRequests(setRequestList);
  }, []);

  return (
    <>
      <div className="header">
        <h1 className="american">American Airlines</h1>
      </div>
      <div className="request-headline">
        <h2>Travelers Requests</h2>
      </div>
      <div>
        {requestList?.map(({ request, id, approved }) => (
          <div onClick={() => approvedRequest(id)} className="request" key={id}>
            <div className="request-status">
              <p className={approved ? "status show" : "status"}>
                {approved ? "Approved" : "Pending"}
              </p>
              <div className="request-content">{request}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default TravelRequestsPage;
