import { Injectable } from "@angular/core";
import { User } from "./user";
import { BehaviorSubject, Observable, Subject } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn: Boolean;

  public LoggedInUser: BehaviorSubject<User>;

  public currentLoggedInUser;

  constructor() {
    this.LoggedInUser = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem("user"))
    );
    this.currentLoggedInUser = this.LoggedInUser.asObservable();
  }

  validateUser(user: User) {
    if (user.UserName === "user" && user.Password === "user") {
      user.role = "User";
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.UserName);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      this.LoggedInUser.next(user);
      return true;
    } else if (user.UserName === "admin" && user.Password === "admin") {
      user.role = "Admin";
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.UserName);
      localStorage.setItem("role", user.role);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      this.LoggedInUser.next(user);
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    localStorage.clear();
  }
  isUserLoggedIn() {
    if (localStorage.getItem("isLoggedIn") === null) {
      return false;
    }
    return true;
  }
}
