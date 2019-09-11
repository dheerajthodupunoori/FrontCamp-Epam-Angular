import { Injectable } from "@angular/core";
import { newsApiEndPoint } from "./Config/Endpoint";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  public sourceName = "bbc-news";
  public articles;
  constructor(private http: HttpClient) {
    this.getAuthorsList(this.sourceName).then(data => (this.articles = data));
  }

  getChannels(): Observable<any> {
    return this.http.get("https://newsapi.org/v1/sources");
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
