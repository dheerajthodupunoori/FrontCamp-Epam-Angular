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
  constructor(private _newsService: NewsService) {}

  //Called when component is initialized.
  async ngOnInit() {
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    this.channels = await this._newsService.getChannels();
    console.log(this.channels);
  }
  sourceChanged(id) {
    this.selectedSourceId = id;
    this.sendSourceNameToParent.emit(this.selectedSourceId);
    this.getArticles();
    console.log(this.articles);
    console.log(id);
  }

  async getArticles() {
    this.articles = await this._newsService.getAuthorsList(
      this.selectedSourceId
    );
  }
}
