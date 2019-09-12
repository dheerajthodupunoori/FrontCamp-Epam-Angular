import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-source",
  templateUrl: "./source.component.html",
  styleUrls: ["./source.component.css"]
})
export class SourceComponent implements OnInit {
  public sourceName = "";
  public articles = [];
  public searchString = "";
  constructor() {}

  ngOnInit() {}
}
