function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //   resolve({ name: "Ashutosh", url: "https://google.com" });
      reject({ name: "Ashutosh", url: "https://google.com" });
    }, 2000);
  });
}

// fetchUserData().then().catch();

async function getUserData() {
  try {
    console.log("fetching user data...");
    const userData = await fetchUserData();
    console.log("User data fetched successfully");
    console.log(userData);
  } catch (error) {
    console.log("Error fetching data " + error);
  }
}

getUserData();
