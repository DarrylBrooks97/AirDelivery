var callback = function (response) {
  if (response.result === "SUCCESS") {
    console.log("Response from SDK: %s", response.restApiResponse);
  } else if (response.result === "ERROR") {
    console.log("An error occurred");
  }
};

SRCi.configure(
  "SRCCHIPPAY",
  "merchant.SRCCHIPPAY",
  "localhost:3000",
  "<your_session_ID>",
  { wsVersion: 57 },
  callback
);
