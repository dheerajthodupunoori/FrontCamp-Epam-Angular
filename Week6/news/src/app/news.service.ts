import { Injectable } from "@angular/core";
import { newsApiEndPoint } from "./Config/Endpoint";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getChannels(): Observable<any> {
    // return fetch("https://newsapi.org/v1/sources")
    //   .then(response => response.json())
    //   .then(json => json.sources)
    //   .catch(error => JSON.stringify(error));

    return this.http.get("https://newsapi.org/v1/sources");
  }
  // errorHandler(error: HttpErrorResponse) {
  //   return Observable.throw(error.message || "Server Error");
  // }
  getAuthorsList(channelId) {
    let channelAuthorEndpoint = newsApiEndPoint.articlesEndPoint;
    const url = `${channelAuthorEndpoint}source=${channelId}&apiKey=${newsApiEndPoint.key}`;
    return fetch(url)
      .then(response => response.json())
      .then(json => json.articles)
      .catch(error => JSON.stringify(error));
  }
}
