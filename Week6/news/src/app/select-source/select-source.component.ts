import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-select-source",
  templateUrl: "./select-source.component.html",
  styleUrls: ["./select-source.component.css"]
})
export class SelectSourceComponent implements OnInit {
  public selectedSourceId: string = "der-tagesspiegel";
  public channels = [];
  public articles = [];
  @Output() public sendSourceNameToParent = new EventEmitter();
  @Output() public sendArticlesToNewsfeedComponent = new EventEmitter();

  constructor(private _newsService: NewsService) {}

  //Called when component is initialized(only once).
  async ngOnInit() {
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    this.channels = await this._newsService.getChannels();
    this.articles = await this._newsService.getAuthorsList(
      this.selectedSourceId
    );
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
    console.log("channels in ngOnInIt()", this.channels);
    console.log("articles in ngOnInIt()", this.articles);
  }
  async sourceChanged(id) {
    this.selectedSourceId = id;
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    this.articles = await this._newsService.getAuthorsList(
      this.selectedSourceId
    );
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
    console.log("articles when dropdwon value changed", this.articles);
    console.log(id);
  }

  async getArticles() {
    this.articles = await this._newsService.getAuthorsList(
      this.selectedSourceId
    );
  }
}
