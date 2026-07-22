// Promises is a utility
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fethcing data");
      }
    }, 3000);
  });
}

// Consumption of promise
fetchData()
  .then((res) => {
    // resolve("Data fetched successfully"); -> Resolve comes to the then block
    console.log(res);
    return "ASHUTOSH";
  })
  .then((data) => {
    console.log("Chaining - result in lowercase " + data.toLowerCase());
  })
  .catch((error) => {
    //  reject("Error fethcing data"); -> Reject comes to the catch block
    console.log("Catch block : ", error);
  });
