import {
  Component,
  OnInit,
  OnDestroy,
  Input,
  OnChanges,
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
  @Input() public user: User;
  constructor() {}

  ngOnInit() {}
  //Called before ngOnIt()
  ngOnChanges(changes: SimpleChanges) {
    console.log("Changes", changes);
    for (let propertyName in changes) {
      let change = changes[propertyName];
      let current = JSON.stringify(change.currentValue);
      let previous = JSON.stringify(change.previousValue);
      console.log(
        propertyName,
        ": Current Value :",
        current,
        "Previous Value :",
        previous
      );
    }
  }

  ngDoCheck() {}

  ngOnDestroy() {
    console.log(
      "Test component is Destroyed and navigated to another component"
    );
  }
}
