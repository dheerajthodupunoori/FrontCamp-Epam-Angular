import getChannels from "./GetListOfChannels.js";
import createChannelDropdown from "./GenerateDropdown.js";
import getAuthorsList from "./GetAuthors.js";
import createAuthorsDivision from "./GenerateAuthorsDivision.js";
import displayHiddenAuthors from "./DisplayHiddenAuthors.js";
import hideUnnecessaryChannels from "./HideUnnecessaryChannels.js";

var channels = getChannels();
var selectedChannels = [];
var authors;
channels.then(data => {
  createChannelDropdown(data);
});
var getAuthors = function() {
  //console.log("inside get authors");
  let channelExists = false;
  let selectedChannel = document.getElementById("select-channel");
  let channelId = selectedChannel.value;
  if (selectedChannels.length != 0) {
    selectedChannels.forEach(channel => {
      if (channel === channelId) {
        channelExists = true;
      }
    });
  }
  if (channelExists) {
    hideUnnecessaryChannels(selectedChannels);
    displayHiddenAuthors(channelId);
  } else {
    hideUnnecessaryChannels(selectedChannels);
    selectedChannels.push(channelId);
    authors = getAuthorsList(channelId);
    authors.then(data => {
      createAuthorsDivision(data, channelId);
    });
  }
};
// writing this function because this js mentioned as type module so cant use "onchange" attribute on select in html
// https://stackoverflow.com/questions/53069695/cant-call-a-function-from-js-file-imported-as-type-module
// https://stackoverflow.com/questions/53630310/use-functions-defined-in-es6-module-directly-in-html
function addOnChangedEventListenerToDropDown() {
  var selectedChannel = document.getElementById("select-channel");
  selectedChannel.addEventListener("change", getAuthors);
  //   console.log("added event listener");
}
addOnChangedEventListenerToDropDown();
