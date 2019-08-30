import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-select-source",
  templateUrl: "./select-source.component.html",
  styleUrls: ["./select-source.component.css"]
})
export class SelectSourceComponent implements OnInit {
  selectedSource: string = "";
  @Output() public sendSourceNameToParent = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  sourceChanged(skill: any) {
    this.selectedSource = skill;
    this.sendSourceNameToParent.emit(skill);
    console.log(skill);
  }
}
