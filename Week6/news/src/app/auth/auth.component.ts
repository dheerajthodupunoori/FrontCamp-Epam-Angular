import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.css"]
})
export class AuthComponent implements OnInit {
  public isLoggedIn: Boolean;

  public loggedInUser: string;

  constructor(private route: Router, private router: ActivatedRoute) {
    this.isLoggedIn =
      localStorage.getItem("isLoggedIn") === null ? false : true;
    console.log(this.isLoggedIn);
  }

  ngOnInit() {}

  isAlreadyLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === null) {
      this.route.navigate(["/login"]);
    } else {
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      this.loggedInUser = localStorage.getItem("userName");
    }
  }
}
