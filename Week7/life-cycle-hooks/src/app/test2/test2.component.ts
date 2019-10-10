import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-test2",
  templateUrl: "./test2.component.html",
  styleUrls: ["./test2.component.css"]
})
export class Test2Component implements OnInit {
  constructor() {}

  ngOnInit() {}
  ngAfterContentInit() {
    console.log("Test2 Components AfterContentInit is called");
  }
  ngAfterContentChecked() {
    console.log("Test2 Components ngAfterContentChecked is called");
  }
  ngOnDestroy() {
    console.log(
      "Test2 component is Destroyed and navigated to another component"
    );
  }
}
