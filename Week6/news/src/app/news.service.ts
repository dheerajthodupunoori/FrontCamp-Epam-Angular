import { Injectable } from "@angular/core";

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
}
