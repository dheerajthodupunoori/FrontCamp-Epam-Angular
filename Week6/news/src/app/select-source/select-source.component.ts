import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NewsService } from "../news.service";

@Component({
  selector: "app-select-source",
  templateUrl: "./select-source.component.html",
  styleUrls: ["./select-source.component.css"]
})
export class SelectSourceComponent implements OnInit {
  selectedSource: string = "";
  public channels = [];
  @Output() public sendSourceNameToParent = new EventEmitter();
  constructor(private _newsService: NewsService) {}

  //Called when component is initialized.
  async ngOnInit() {
    this.channels = await this._newsService.getChannels();
    // channels.then(data => {
    //   console.log("data", data);
    //   this.channels = data;
    // });
    console.log(this.channels);
  }
  sourceChanged(skill: any) {
    this.selectedSource = skill;
    this.sendSourceNameToParent.emit(skill);
    console.log(skill);
  }
}
