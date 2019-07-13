document.title = "FrontCamp Training Home Task Two";
function CreatePage() {
  // navbar
  var header = document.createElement("div");
  header.className = "header";
  header.setAttribute("class", "header");

  var title = document.createElement("h1");
  title.innerText = "NEWSFEED";
  title.setAttribute("class", "newsfeed");

  var another_feedback = document.createElement("h4");
  another_feedback.className = "another-feedback";
  another_feedback.innerText = "Yet another feedback";

  header.appendChild(title);
  header.appendChild(another_feedback);
  document.body.appendChild(header);
  // navbar end

  CreateContent();
}
var mainDivision = document.createElement("div");

// this method creates the main content of the body
var CreateContent = function() {
  mainDivision.setAttribute("class", "maindiv");
  mainDivision.setAttribute("id", "maindiv");

  var mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "flex-container");
  var logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  var logoImage = document.createElement("img");
  logo.appendChild(logoImage);
  var content = document.createElement("div");
  content.setAttribute("class", "content");
  mainContainer.appendChild(logo);
  mainContainer.appendChild(content);

  var category = document.createElement("div");
  category.setAttribute("class", "category");
  var categories = createCategories();
  var emailInputField = document.createElement("input");
  emailInputField.setAttribute("type", "text");
  emailInputField.setAttribute("name", "fname");
  emailInputField.setAttribute("class", "input");
  emailInputField.setAttribute("id", "email");
  emailInputField.addEventListener("blur", validateEmailId);
  var subscribe = document.createElement("button");
  subscribe.setAttribute("value", "Subscribe");
  subscribe.setAttribute("class", "subscribe-button");
  subscribe.innerText = "Subscribe";
  category.appendChild(categories);
  category.appendChild(emailInputField);
  category.appendChild(subscribe);
  mainContainer.appendChild(category);
  mainDivision.appendChild(mainContainer);
  // var elements = generateItems();
  // elements.forEach(element => {
  //   mainDivision.appendChild(element);
  // });
  displayAll();
  document.body.appendChild(mainDivision);
};

var generateItems = function() {
  var divisions = [];
  // this loop will create 10 items
  for (var i = 0; i < 10; i++) {
    var mainContainer = document.createElement("div");
    mainContainer.setAttribute("class", "flex-container");
    mainContainer.setAttribute("id", i + 1);
    var logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    var logoImage = document.createElement("img");
    logoImage.setAttribute("src", "./Assets/image1.png");
    logo.appendChild(logoImage);
    var content = document.createElement("div");
    content.setAttribute("class", "content");
    var title = document.createElement("h3");
    title.innerText = "Title One";
    var description = document.createElement("p");
    description.innerText =
      "We have helped over 120 Fortune 1000 companies in the following" +
      "industries solve their most complex technology challenges. Now see " +
      "what we can do for you. We have helped over 120 Fortune 1000 companies" +
      "in the following industries solve their most complex technology" +
      "challenges. Now see what we can do for you. We have helped over 120" +
      "Fortune 1000 companies in the following industries solve their most" +
      "complex technology challenges. Now see what we can do for you";
    var clickToReadMore = document.createElement("button");
    clickToReadMore.setAttribute("value", "Continue Reading");
    clickToReadMore.setAttribute("class", "continue-reading");
    clickToReadMore.setAttribute("id", i + 1);
    clickToReadMore.addEventListener("click", showPoPUp);
    clickToReadMore.innerText = "Continue Reading";
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(clickToReadMore);
    mainContainer.appendChild(logo);
    mainContainer.appendChild(content);
    divisions[i] = mainContainer;
    // mainDivision.appendChild(mainContainer);
  }
  return divisions;
};

var createCategories = function() {
  var selectCategory = document.createElement("select");
  selectCategory.setAttribute("class", "dropdown");
  selectCategory.setAttribute("id", "dropdown");
  selectCategory.addEventListener("change", displaySelectedItem);
  selectCategory.addEventListener("click", resetToDisplay);
  for (var i = 0; i <= 10; i++) {
    if (i == 0) {
      var category = document.createElement("option");
      category.setAttribute("value", "ALL");
      category.innerText = "ALL";

      selectCategory.appendChild(category);
    } else {
      var category = document.createElement("option");
      category.setAttribute("value", i);
      category.innerText = i;

      selectCategory.appendChild(category);
    }
  }
  return selectCategory;
};

var titles = generateItems();
// console.log(titles);

var resetToDisplay = function() {};

var displayAll = function() {
  titles.forEach(element => {
    mainDivision.appendChild(element);
  });
};

var removeAll = function() {
  // let currentDivisions = document.getElementById("maindiv");
  let items = document.getElementById("maindiv").childNodes;
  console.log("previous length" + items.length);
  // console.log(items[0]);
  let lastChild = mainDivision.lastElementChild;
  let firstChild = mainDivision.firstElementChild;
  while (lastChild && firstChild != lastChild) {}
  for (var i = 1; i < items.length; i++) {
    // console.log(items[i].id);
    mainDivision.removeChild(items[i]);
  }
  // let newItems = mainDivision.childNodes;
  // console.log("new length  " + newItems.length);
  // newItems.forEach(element => {
  //   mainDivision.appendChild(element);
  // });
};

var displaySelectedItem = function() {
  let selectedItem = document.getElementById("dropdown").value;
  let currentDivisions = document.getElementById("maindiv");
  let items = document.getElementById("maindiv").childNodes;
  if (selectedItem == "ALL") {
    removeAll();
    displayAll();
  }
  for (var i = 0; i < 10; i++) {
    if (selectedItem == titles[i].id) {
      console.log(selectedItem);
      removeAll();
      mainDivision.appendChild(titles[i]);
      // items[1].replaceWith(titles[i]);
    }
  }
};

var insertCategorySection = function() {
  let items = document.getElementById("maindiv").childNodes;
  return items[0];
};

// to show popup when continue reading button is clicked
function showPoPUp() {
  alert("Hello");
}

var validateEmailId = function() {
  let emailId = document.getElementById("email").value;
  let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;
  if (emailRegex.test(emailId)) {
    localStorage.setItem("EmailId", emailId);
  } else {
    alert("Invalid EmailId");
  }
};
