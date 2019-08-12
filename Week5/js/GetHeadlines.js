import { newsApiEndPoint } from "./Endpoints.js";

export function getHeadlines() {
  console.log("called");
  return fetch(newsApiEndPoint.headlinesEndpoint)
    .then(response => response.json())
    .then(json => {
      console.log(json.articles);
      return json.articles;
    })
    .catch(error => JSON.stringify(error));
}
