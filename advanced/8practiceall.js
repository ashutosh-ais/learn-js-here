// Closures
function outer() {
  let count = 1;
  return function inner() {
    count = count + 1;
    return count;
  };
}

let increment = outer();
// console.log(increment());
// console.log(increment());
// console.log(increment());

// Promises
function fetchData() {
  return new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
      if (success) {
        resolve({ data: true });
      } else {
        reject({ data: false, error: true });
      }
    }, 1200);
  });
}

// fetchData()
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log("Error occured : " + JSON.stringify(error, null, 2));
//   });

// Binding
const person = {
  name: "Hello",
  greet() {
    return `My name is ${this.name}`;
  },
};

// console.log(person.name);
// console.log(person.greet());

// let obj = person.greet.bind({ name: "Dog" });
// console.log(obj.name);
// console.log(obj());

// async await

function fetchData() {
  return new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
      if (success) {
        resolve("Accepted");
      } else {
        reject("Rejected");
      }
    }, 2000);
  });
}

async function getData() {
  try {
    const response = await fetchData();
    console.log("Response -> ", response);
  } catch (error) {
    console.log("Error -> ", error);
  }
}

// getData();

function getPostData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ data: true });
    }, 2000);
  });
}

function getCommentsData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject({ data: "ashutosh" });
    }, 4000);
  });
}

// Promise.all() → Fails fast. If one promise rejects, the entire operation rejects immediately.
// Promise.allSettled() → Waits for every promise to finish, whether they succeed or fail.

async function getAllPostData() {
  try {
    const [postData, commentsData] = await Promise.allSettled([
      getPostData(),
      getCommentsData(),
    ]);
    console.log("postData -> ", postData);
    console.log("commentsData -> ", commentsData);
  } catch (error) {
    console.log("Error fetching data");
  }
}

// getAllPostData();
/*
postData ->  { status: 'fulfilled', value: { data: true } }
commentsData ->  { status: 'rejected', reason: { data: 'ashutosh' } }
*/

const p1 = {
  name: "Ashutosh",
  age: 25,
};

const p2 = {
  name: "Jhon",
  age: 28,
};

function greet(city, phone) {
  return `Hello ${this.name}, Your age is ${this.age}\nCity is ${city}, Phone number is ${phone}`;
}

// call
// console.log(greet.call(p1, "Bhubaneswar", 8144505057));
// console.log(greet.call(p2, "Kolkata", 789456123));

// apply
// console.log(greet.apply(p1, ["Bhubaneswar", 8144505057]));
// console.log(greet.apply(p2, ["Kolkata", 789456123]));

console.log(greet.bind(p1)("Bhubaneswar", 8144505057));

// | Method    | Calls function immediately?    | Arguments       |
// | --------- | -----------------------------  | --------------- |
// | `call()`  | ✅ Yes                         | Comma-separated |
// | `apply()` | ✅ Yes                         | Array           |
// | `bind()`  | ❌ No (returns a new function) | Comma-separated |
