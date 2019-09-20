import { Component, OnInit } from "@angular/core";
import { User } from "./user";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "life-cycle-hooks";
  userText: string = "Angular Task-7";
  user = {
    name: ""
  };

  ngOnInit() {
    console.log("Parent ngOnIt() called");
  }
  UpdateUser() {
    this.user.name = "dheeraj";
  }
}
