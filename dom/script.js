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
