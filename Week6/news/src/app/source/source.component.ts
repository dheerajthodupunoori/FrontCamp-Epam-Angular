import { Component, OnInit, OnDestroy } from "@angular/core";
import { NewsService } from "../news.service";
import { AuthService } from "../auth.service";
import { User } from "../user";
import { Role } from "../models/role";
@Component({
  selector: "app-source",
  templateUrl: "./source.component.html",
  styleUrls: ["./source.component.css"]
})
export class SourceComponent implements OnInit, OnDestroy {
  public sourceName = "";
  public articles = [];
  public searchString = "";
  private x;
  public loggedInUser: User;
  constructor(
    private _newsService: NewsService,
    private _authService: AuthService
  ) {}

  ngOnInit() {
    this.x = this._newsService.currentSourceName.subscribe(
      data => (this.sourceName = data)
    );
    this._authService.currentLoggedInUser.subscribe(
      data => (this.loggedInUser = data)
    );
    console.log(this.loggedInUser);
  }

  showCreateArticle() {
    return this.loggedInUser.role === Role.Admin ? true : false;
  }

  ngOnDestroy() {
    this.x.unsubscribe();
  }
}
