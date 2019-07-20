import { newsApiEndPoint } from "./Endpoints.js";
import getChannels from "./GetListOfChannels.js";

var channels = getChannels();
// var data = Promise.resolve(channels).then(result => result);
// console.log(channels);
var result;
console.log(
  channels.then(data => {
    result = data;
  })
);
console.log(result);
