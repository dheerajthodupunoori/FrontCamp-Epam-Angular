import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SourceComponent } from "./source/source.component";
// import { AppComponent } from "../app/app.component";

const routes: Routes = [
  { path: "", component: SourceComponent },
  {
    path: "addArticle/:sourceName",
    component: CreateArticleComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
