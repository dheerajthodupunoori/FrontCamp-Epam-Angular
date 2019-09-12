import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-source",
  templateUrl: "./source.component.html",
  styleUrls: ["./source.component.css"]
})
export class SourceComponent implements OnInit {
  public sourceName = "";
  public articles = [];
  public searchString = "";
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {}
}
