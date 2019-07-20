// import { newsApiEndPoint } from "./Endpoints.js";
import getChannels from "./GetListOfChannels.js";
import createChannelDropdown from "./GenerateDropdown.js";
import getAuthorsList from "./GetAuthors.js";
import createAuthorsDivision from "./GenerateAuthorsDivision.js";

var channels = getChannels();
var authors;
channels.then(data => {
  createChannelDropdown(data);
});
var getAuthors = function() {
  let selectedChannel = document.getElementById("select-channel");
  let channelId = selectedChannel.value;
  authors = getAuthorsList(channelId);
  //   console.log(authors);
  authors.then(data => {
    // console.log(data);
    createAuthorsDivision(data);
  });
};
// writing this function because this js mentioned as type module so cant use "onchange" attributeon select in html
// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module
// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html
function addOnChangedEventListenerToDropDown() {
  var selectedChannel = document.getElementById("select-channel");
  selectedChannel.addEventListener("change", getAuthors);
  //   console.log("added event listener");
}
addOnChangedEventListenerToDropDown();
