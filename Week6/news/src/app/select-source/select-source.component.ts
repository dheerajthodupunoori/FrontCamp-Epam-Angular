import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-select-source",
  templateUrl: "./select-source.component.html",
  styleUrls: ["./select-source.component.css"]
})
export class SelectSourceComponent implements OnInit {
  public selectedSourceId: string;
  public channels = [];
  public articles = [];
  @Output() public sendSourceNameToParent = new EventEmitter();
  @Output() public sendArticlesToNewsfeedComponent = new EventEmitter();

  constructor(private _newsService: NewsService) {
    this.selectedSourceId = this._newsService.sourceName;
  }

  //Called when component is initialized(only once).
  async ngOnInit() {
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    await this._newsService
      .getChannels()
      .subscribe(data => (this.channels = data.sources));
    // this._newsService.articles = await this._newsService.getAuthorsList(
    //   this.selectedSourceId
    // );
    this.articles = await this._newsService.articles;
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
  }
  async sourceChanged(id) {
    this._newsService.sourceName = id;
    this.selectedSourceId = this._newsService.sourceName;
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    this._newsService.articles = await this._newsService.getAuthorsList(
      this.selectedSourceId
    );
    this.articles = await this._newsService.articles;
    this.sendArticlesToNewsfeedComponent.emit(this.articles);
  }
}
