import { Injectable } from "@angular/core";
import { newsApiEndPoint } from "./Config/Endpoint";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor() {}

  getChannels() {
    return fetch("https://newsapi.org/v1/sources")
      .then(response => response.json())
      .then(json => json.sources)
      .catch(error => JSON.stringify(error));
  }
  getAuthorsList(channelId) {
    let channelAuthorEndpoint = newsApiEndPoint.articlesEndPoint;
    const url = `${channelAuthorEndpoint}source=${channelId}&apiKey=${newsApiEndPoint.key}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json.articles)
      .catch(error => JSON.stringify(error));
  }
}
