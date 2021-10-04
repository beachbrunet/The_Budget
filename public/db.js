// create variable to hold connection
let db;
// create a request for the budget db, set to version 1 --connect
const request = indexedDB.open("budget", 1);

// create schema and store data
request.onupgradeneeded = function (e) {
  const db = e.target.result;
  //   create an object store table and set it to an autoincrement
  db.createObjectStore("pending", { autoIncrement: true });
};

// if successful -- establish connection and save to the db variable.
request.onsuccess = function (e) {
  db = e.target.result;
  //   Check to see if its online before reading from the db, if yes then send data to the api.
  if (navigator.online) {
    uploadTransaction();
  }
};
// log error
request.onerror = function (event) {
  console.log("Oops" + event.target.errorCode);
};

// function to submit a new transaction if there is no internet/offline mode
// check if app is online before it reads the db
// open, access store, record
function saveRecord(record) {
  // open
  const transaction = db.transaction(["pending"], "readwrite");
  // access the store
  const store = transaction.objectStore("pending");
  store.add(record); /* add method */
}
// open, access store, record
function uploadTransaction() {
  // open
  const transaction = db.transaction(["pending"], "readwrite");
  // access the store
  const store = transaction.objectStore("pending");
  store.add(record);
}

// post to JSON using fetch, sending the DB to the api server
getAll.something = function () {
  if (getAll.result.length > 0) {
    fetch("/models/transaction", {
      method: "POST",
      body: JSON.stringify(getAll.result),
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then(() => {
        // when the request is successful, open transaction
        const transaction = db.transaction(["pending"], "readwrite");
        // access the object
        const store = transaction.objectStore("pending");
        store.clear();
      });
  }
};

// look to see if the db is back online
window.addEventListener("online", uploadTransaction);
