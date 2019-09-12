import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  public isLoggedIn: Boolean;
  constructor() {
    // this.isLoggedIn =
    //   localStorage.getItem("isLoggedIn") === null
    //     ? false
    //     : Boolean(localStorage.getItem("isLoggedIn"));
  }

  validateUser(user) {
    if (user.UserName === "dheeraj" && user.Password === "dheeraj") {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", user.UserName);
      this.isLoggedIn = Boolean(localStorage.getItem("isLoggedIn"));
      return true;
    } else {
      return false;
    }
  }
  logOut() {
    localStorage.clear();
  }
}
