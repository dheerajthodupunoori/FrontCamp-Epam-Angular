import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Article } from "../article";
import { NewsService } from "../news.service";

@Component({
  selector: "app-create-article",
  templateUrl: "./create-article.component.html",
  styleUrls: ["./create-article.component.css"]
})
export class CreateArticleComponent implements OnInit {
  public currentSourceName: string;
  public articles = [];
  article = new Article("title", "description", "publishedAt", "author", "url");
  constructor(
    private route: ActivatedRoute,
    private _newsService: NewsService
  ) {}

  ngOnInit() {
    this.currentSourceName = this.route.snapshot.paramMap.get("sourceName");
    console.log(this._newsService.articles);
    this._newsService.articles.push(this.article);
    console.log("after adding article", this._newsService.articles);
  }
}
