document.title = "FrontCamp Training Home Task Two";
var mainDivision = document.createElement("div");
var dataDiv = document.createElement("div");
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
  dataDiv.setAttribute("id", "data-div");
  displayAll(dataDiv);
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
var titles = generateItems();

var createCategories = function() {
  var selectCategory = document.createElement("select");
  selectCategory.setAttribute("class", "dropdown");
  selectCategory.setAttribute("id", "dropdown");
  selectCategory.addEventListener("change", displaySelectedItem);
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

var displayAll = function(dataDiv) {
  titles.forEach(element => {
    dataDiv.appendChild(element);
  });
  mainDivision.appendChild(dataDiv);
};

var removeAll = function() {
  let currentDataDiv = document.getElementById("data-div");
  let items = currentDataDiv.childNodes;
  console.log("previous length" + items.length);
  // let lastChild = mainDivision.lastElementChild;
  // let firstChild = mainDivision.firstElementChild;
  console.log("length of data div :" + items.length);
  var child = currentDataDiv.lastElementChild;
  while (child) {
    currentDataDiv.removeChild(child);
    child = currentDataDiv.lastElementChild;
  }
  while (currentDataDiv.hasChildNodes()) {
    currentDataDiv.removeChild();
  }
  // for (var i = 0; i < items.length; i++) {
  //   console.log("div to be removed :" + items[i].id);
  //   currentDataDiv.removeChild(items[i]);
  // }
};

var displaySelectedItem = function() {
  let selectedItem = document.getElementById("dropdown").value;
  let currentDivisions = document.getElementById("maindiv");
  let items = document.getElementById("maindiv").childNodes;
  if (selectedItem == "ALL") {
    removeAll();
    displayAll(dataDiv);
  }
  for (var i = 0; i < 10; i++) {
    if (selectedItem == titles[i].id) {
      console.log("selected category" + selectedItem);
      removeAll();
      dataDiv.appendChild(titles[i]);
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
