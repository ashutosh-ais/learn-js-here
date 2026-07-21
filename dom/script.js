// console.log("Hello from js");
// console.log(document.firstChild);
// console.log(document.getElementsByTagName("p"));
// alert("Connected");

// example[1]
document
  .getElementById("changeTextButton")
  .addEventListener("click", function () {
    let paragraph = document.getElementById("myParagraph");
    // console.log(paragraph.textContent);
    paragraph.textContent = "Paragraph is changed";
  });

// example[2]
document
  .getElementById("highlightFirstCity")
  .addEventListener("click", function () {
    let citiesList = document.getElementById("citiesList");
    // console.log(citiesList.firstElementChild);
    // console.log(citiesList.firstElementChild.classList);
    if (citiesList.firstElementChild.classList?.contains("highlight")) {
      citiesList.firstElementChild.classList.remove("highlight");
    } else {
      citiesList.firstElementChild.classList.add("highlight");
    }
  });

// example[3]
document.getElementById("changeOrder").addEventListener("click", function () {
  let order = document.getElementById("coffeeOrder");
  order.firstElementChild.textContent = "Espresso";
  order.style.backgroundColor = "red";
});

// example[4]
document.getElementById("addNewItem").addEventListener("click", function () {
  let newItem = document.createElement("li");
  newItem.textContent = "Eggs";
  document.getElementById("shoppingList").appendChild(newItem);
});

// example[5]
document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    // taskList.remove();
    taskList.lastElementChild?.remove();
  });

// example[6]
document
  .getElementById("clickMeButton")
  .addEventListener("mouseover", function () {
    alert("demo");
  });

// example[7]
document.getElementById("teaList").addEventListener("click", function (event) {
  // console.log(event);
  // console.log(event.target); -> li items
  if (event.target && event.target.matches(".teaItem")) {
    alert("You selected: " + event.target.textContent);
  }
});

// example[8]
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let feedback = document.getElementById("feedbackInput").value;
    document.getElementById("feedbackDisplay").textContent =
      `Feedback is ${feedback}`;
  });

// example[9]
document.addEventListener("DOMContentLoaded", function () {
  // After DOM content gets loaded the text content will get changed to Ashutosh
  let domStatus = document.getElementById("domStatus");
  domStatus.textContent = "Ashutosh";
  domStatus.style.backgroundColor = "yellow";
});

// example[10]
document
  .getElementById("toggleHighlight")
  .addEventListener("click", function () {
    let descriptionTextElement = document.getElementById("descriptionText");
    // if (descriptionTextElement.classList.contains("highlight")) {
    //   descriptionTextElement.classList.remove("highlight");
    // } else {
    //   descriptionTextElement.classList.add("highlight");
    // }
    descriptionTextElement.classList.toggle("highlight");
  });

// Extract all the links from DOM
let anchor = document.getElementsByTagName("a");
for (let index = 0; index < anchor.length; index++) {
  console.log(anchor[index].textContent + " : " + anchor[index].href);
}
