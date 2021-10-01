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
  store.add(record);
}
// open, access store, record
function uploadTransaction() {
  // open
  const transaction = db.transaction(["pending"], "readwrite");
  // access the store
  const store = transaction.objectStore("pending");
  store.add(record);
}

// post to JSON using fetch
getAll.something = function () {
  if (getAll.result.length > 0) {
    fetch("API", {
      method: "POST",
      body: JSON.stringify(getAll.result),
      headers: {
          Accept: something
      }
    })
    .then(response => response.json())
    .then(() => {
        const transaction = db.transaction(["pending"], "readwrite");
        const transaction = db.transaction(["pending"], "readwrite");
        store.clear();
    }
  }
};
// 
// 





// example code structure
//request.onupgradeneeded = function(e) {
//     const db = request.result;
//     db.createObjectStore(storeName, { keyPath: "_id" });
//   };

//   request.onerror = function(e) {
//     console.log("There was an error");
//   };

//   request.onsuccess = function(e) {
//     db = request.result;
//     tx = db.transaction(storeName, "readwrite");
//     store = tx.objectStore(storeName);

//     db.onerror = function(e) {
//       console.log("error");
//     };
//     if (method === "put") {
//       store.put(object);
//     }
//     if (method === "get") {
//       const all = store.getAll();
//       all.onsuccess = function() {
//         resolve(all.result);
//       };
//     }
//     tx.oncomplete = function() {
//       db.close();
//     };
//   };
// });
// }
//


// look to see if the db is back online
// window.addEventListener("online", uploadTransaction);
