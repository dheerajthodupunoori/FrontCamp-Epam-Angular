import getChannels from "./GetListOfChannels.js";
import createChannelDropdown from "./GenerateDropdown.js";
import getAuthorsList from "./GetAuthors.js";
import createAuthorsDivision from "./GenerateAuthorsDivision.js";
import getRequiredNumberOfDivisions from "./getRequiredNumberOfDivisions.js";
import overRidePreviousChannels from "./OverRidePreviousChannels.js";
import "../css/HomeTask3.css";
import getHeadlines from "./GetHeadlines.js";
import populateModalWithHeadlines from "./PopulateHeadlines.js";

var channels = getChannels();
var authors;
var masterData = {};
channels.then(data => {
  createChannelDropdown(data);
});
var getAuthors = function() {
  let channelExists = false;
  let selectedChannel = document.getElementById("select-channel");
  let channelId = selectedChannel.value;
  let numberOfDivElements = document.getElementById("authors-division")
    .childNodes.length;
  if (masterData.hasOwnProperty(channelId)) {
    channelExists = true;
  }
  if (channelExists && numberOfDivElements != 0) {
    let requiredDivisions = getRequiredNumberOfDivisions(
      numberOfDivElements,
      masterData[channelId]
    );
    overRidePreviousChannels(masterData[channelId], requiredDivisions);
  } else if (!channelExists && numberOfDivElements != 0) {
    authors = getAuthorsList(channelId);
    authors.then(data => {
      masterData = {
        [channelId]: data,
        ...masterData
      };
      let requiredDivisions = getRequiredNumberOfDivisions(
        numberOfDivElements,
        masterData[channelId]
      );
      overRidePreviousChannels(masterData[channelId], requiredDivisions);
    });
  } else {
    authors = getAuthorsList(channelId);
    authors.then(data => {
      masterData = {
        [channelId]: data,
        ...masterData
      };
      createAuthorsDivision(data);
    });
  }
};
// writing this function because this js mentioned as type module so cant use "onchange" attribute on select in html
// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module
// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html
function addOnChangedEventListener() {
  var selectedChannel = document.getElementById("select-channel");
  selectedChannel.addEventListener("change", getAuthors);
  let emailInput = document.getElementById("email");
  emailInput.addEventListener("blur", validateEmailId);
}
addOnChangedEventListener();

// function addHeadlinesEventListener() {
//   let headlines = document.getElementById("headlines");
//   headlines.addEventListener("click", getHeadlines);
//   populateHeadlinesDataInModal();
// }

//This function is to validate an email Id entered by the user.
var validateEmailId = function() {
  alert("vds");
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

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  var headlines = getHeadlines();
  headlines.then(data => {
    console.log(data);
    populateModalWithHeadlines(data);
  });
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
