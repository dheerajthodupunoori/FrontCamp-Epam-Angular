document.title = "FrontCamp Training Task Two";
var mainDivision = document.createElement("div");
var dataDiv = document.createElement("div");
var channelsData = [
  {
    name: "Canada",
    logopath: "./Assets/canada.png",
    address:
      "TORONTO 5 Park Home Avenue, Suite 400, ON M2N 6L4, North York, Toronto Canada"
  },
  {
    name: "Mexico",
    logopath: "./Assets/mexico.png",
    address: `GUADALAJARA
      Periférico Sur #8110,
      Col. El Mante
      45609 Tlaquepaque, Jalisco
      Mexico`
  },
  {
    name: "Us",
    logopath: "./Assets/us.png",
    address: `NEWTOWN, PA
      41 University Drive,
      Suite 202,
      Newtown, PA 18940
      USA`
  },
  {
    name: "Austria",
    logopath: "./Assets/austria.png",
    address: `VIENNA
      Nottendorfer Gasse 11,
      1030 Wien
      Austria `
  },
  {
    name: "Bulgaria",
    logopath: "./Assets/bulgaria.png",
    address: `SOFIA
      69 Bulgaria Blvd.,
      Infinity Tower,
      1404 Sofia
      Bulgaria`
  },
  {
    name: "Republic",
    logopath: "./Assets/republic.png",
    address: `PRAGUE
      City Tower building,
      Hvezdova 2b,
      Prague 4
      Czech Republic`
  },
  {
    name: "Germany",
    logopath: "./Assets/germany.png",
    address:
      "TORONTO 5 Park Home Avenue, Suite 400, ON M2N 6L4, North York, Toronto Canada"
  },
  {
    name: "Hungary",
    logopath: "./Assets/hungary.png",
    address: `FRANKFURT AM MAIN
    Franklinstrasse 56,
    60486 Frankfurt am Main,
    Germany`
  },
  {
    name: "Ireland",
    logopath: "./Assets/ireland.png",
    address: `DUBLIN
    Alexandra House,
    The Sweepstakes,
    Ballsbridge, Dublin 4,
    D04 C7H2
    Ireland`
  },
  {
    name: "Netherlands",
    logopath: "./Assets/netherlands.png",
    address: `DELFT
    Delftechpark 37j
    2628 XJ Delft
    Netherlands`
  }
];
function createPage() {
  // navbar
  let header = document.createElement("div");
  header.setAttribute("class", "header");
  let title = document.createElement("h1");
  title.innerText = "NEWSFEED";
  title.setAttribute("class", "newsfeed");
  let another_feedback = document.createElement("h4");
  another_feedback.className = "another-feedback";
  another_feedback.innerText = "Yet another feedback";
  header.appendChild(title);
  header.appendChild(another_feedback);
  document.body.appendChild(header);
  // navbar end
  createContent();
}

// this method creates the main content of the body
var createContent = function() {
  mainDivision.setAttribute("class", "maindiv");
  mainDivision.setAttribute("id", "maindiv");

  let mainContainer = document.createElement("div");
  mainContainer.setAttribute("class", "flex-container");
  let logo = document.createElement("div");
  logo.setAttribute("class", "logo");
  let content = document.createElement("div");
  content.setAttribute("class", "content");
  mainContainer.appendChild(logo);
  mainContainer.appendChild(content);

  let category = document.createElement("div");
  category.setAttribute("class", "category");
  let categories = createCategories();
  let emailInputField = document.createElement("input");
  emailInputField.setAttribute("type", "text");
  emailInputField.setAttribute("name", "fname");
  emailInputField.setAttribute("class", "input");
  emailInputField.setAttribute("id", "email");
  emailInputField.addEventListener("blur", validateEmailId);
  let subscribe = document.createElement("button");
  subscribe.setAttribute("value", "Subscribe");
  subscribe.setAttribute("class", "subscribe-button");
  subscribe.innerText = "Subscribe";
  let errorMessage = document.createElement("p");
  errorMessage.setAttribute("id", "error");
  category.appendChild(categories);
  category.appendChild(emailInputField);
  category.appendChild(subscribe);
  category.appendChild(errorMessage);
  mainContainer.appendChild(category);
  mainDivision.appendChild(mainContainer);
  dataDiv.setAttribute("id", "data-div");
  displayAll(dataDiv);
  document.body.appendChild(mainDivision);
};
var generateItems = function() {
  let divisions = [];

  // this loop will create 10 items
  for (let i = 0; i < 10; i++) {
    let newsFeed = document.createElement("div");
    newsFeed.setAttribute("class", "flex-container");
    newsFeed.setAttribute("id", i + 1);
    let logo = document.createElement("div");
    logo.setAttribute("class", "logo");
    let logoImage = document.createElement("img");
    logoImage.setAttribute("src", channelsData[i].logopath);
    logoImage.setAttribute("class", "logo-image");
    logo.appendChild(logoImage);
    let content = document.createElement("div");
    content.setAttribute("class", "content");
    let title = document.createElement("h3");
    title.innerText = channelsData[i].name;
    let description = document.createElement("p");
    description.innerText = `We have helped over 120 Fortune 1000 companies in the followingindustries solve their most complex technology challenges. Now see what we can do for you. We have helped over 120 Fortune 1000 companiesin the following industries solve their most complex technologychallenges. Now see what we can do for you. We have helped over 120Fortune 1000 companies in the following industries solve their mostcomplex technology challenges. Now see what we can do for you`;
    let clickToReadMore = document.createElement("button");
    clickToReadMore.setAttribute("value", "Continue Reading");
    clickToReadMore.setAttribute("class", "continue-reading");
    clickToReadMore.setAttribute("id", i + 1);
    clickToReadMore.addEventListener("click", showPoPUp);
    clickToReadMore.innerText = "Continue Reading";
    content.appendChild(title);
    content.appendChild(description);
    content.appendChild(clickToReadMore);
    newsFeed.appendChild(logo);
    newsFeed.appendChild(content);
    divisions[i] = newsFeed;
  }
  return divisions;
};
var channels = generateItems();

var createCategories = function() {
  let selectCategory = document.createElement("select");
  selectCategory.setAttribute("class", "dropdown");
  selectCategory.setAttribute("id", "dropdown");
  selectCategory.addEventListener("change", displaySelectedItem);
  let selectFragment = document.createDocumentFragment();
  let allCategory = document.createElement("option");
  allCategory.setAttribute("value", "ALL");
  allCategory.innerText = "ALL";
  selectFragment.appendChild(allCategory);
  for (let i = 0; i < 10; i++) {
    let category = document.createElement("option");
    category.setAttribute("value", i + 1);
    category.innerText = channelsData[i].name;
    selectFragment.appendChild(category);
  }
  selectCategory.appendChild(selectFragment);
  return selectCategory;
};

var displayAll = function(dataDiv) {
  for (let i = 0; i < channels.length; i++) {
    channels[i].style.display = "flex";
    dataDiv.appendChild(channels[i]);
  }
  mainDivision.appendChild(dataDiv);
};

var removeAll = function() {
  let currentDataDiv = document.getElementById("data-div");
  let children = currentDataDiv.childNodes;
  for (let i = 0; i < children.length; i++) {
    children[i].style.display = "none";
  }
};

var displaySelectedItem = function() {
  let selectedItem = document.getElementById("dropdown").value;
  if (selectedItem == "ALL") {
    removeAll();
    displayAll(dataDiv);
  }
  for (let i = 0; i < 10; i++) {
    if (selectedItem == channels[i].id) {
      removeAll();
      channels[i].style.display = "flex";
      dataDiv.appendChild(channels[i]);
    }
  }
};
// to show popup when continue reading button is clicked
function showPoPUp() {
  alert(channelsData[this.id - 1].address);
}

//This function is to validate an email Id entered by the user.
var validateEmailId = function() {
  let emailId = document.getElementById("email").value;
  //regular expression to validate email id.
  let emailRegex = /^[a-z0-9._]+@[a-z0-9]+.[a-z]{2,3}/;
  let errorMessage = document.getElementById("error");
  if (emailRegex.test(emailId)) {
    //if email id is valid then saving it to local storage.
    errorMessage.innerText = "";
    localStorage.setItem("EmailId", emailId);
  } else {
    errorMessage.innerText = "Invalid Email id";
    errorMessage.style.color = "red";
  }
};
