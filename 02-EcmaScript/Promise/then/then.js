// then : yerine getirilen sözü daha sonradan ele almak için kullanılır.
// resolve çalıştıktan sonra then kullanılır.

const makeServerRequest = new Promise((resolve, reject) => {
    // responseFromServer is set to true to represent a successful response from a server
    let responseFromServer = true;
      
    if (responseFromServer) {
      resolve("We got the data");
    } else {
      reject("Data not received");
    }
  });
  
  makeServerRequest.then(result => {
    console.log(result); // Log the result to the console when the promise is fulfilled.
  });