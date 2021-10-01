// create variable to chold connection
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
  //   Check to see if its online, if yes then send data to the api.
  if (navigator.online) {
    uploadTransation();
  }
};
// log error
request.onerror = function (event) {
  console.log("Oops" + event.target.errorCode);
};

// check if app is online before it reads the db

// look to see if the db is back online
