import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test1",
  templateUrl: "./test1.component.html",
  styleUrls: ["./test1.component.css"]
})
export class Test1Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    console.log("Test1 Components AfterContentInit is called");
  }
  ngAfterContentChecked() {
    console.log("Test1 Components ngAfterContentChecked is called");
  }
  ngOnDestroy() {
    console.log(
      "Test1 component is Destroyed and navigated to another component"
    );
  }
}
