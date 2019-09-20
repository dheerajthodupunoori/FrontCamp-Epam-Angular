import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
  AfterContentInit,
  SimpleChanges,
  DoCheck
} from "@angular/core";
import { User } from "../user";

@Component({
  selector: "app-test",
  templateUrl: "./test.component.html",
  styleUrls: ["./test.component.css"]
})
export class TestComponent implements OnInit, OnChanges, DoCheck {
  @Input() public testInput: String;
  @Input() public user;
  constructor() {}

  ngOnInit() {}
  //Called before ngOnIt()
  ngOnChanges(changes: SimpleChanges) {
    console.log("Test Components ngOnChanges is called");
    // console.log("Changes", changes);
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      // console.log(
      //   propertyName,
      //   ": Current Value :",
      //   current,
      //   "Previous Value :",
      //   previous
      // );
    }
  }

  ngDoCheck() {
    console.log("DO CHECK called");
  }

  ngAfterContentInit() {
    console.log("Test Components AfterContentInit is called");
  }
  ngAfterContentChecked() {
    console.log("Test Components ngAfterContentChecked is called");
  }
  ngOnDestroy() {
    console.log(
      "Test component is Destroyed and navigated to another component"
    );
  }
}
