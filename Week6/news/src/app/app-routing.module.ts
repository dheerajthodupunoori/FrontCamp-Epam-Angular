import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { SourceComponent } from "./source/source.component";
import { InfoComponent } from "./info/info.component";

const routes: Routes = [
  { path: "", component: InfoComponent },
  {
    path: "addArticle/:sourceName",
    component: CreateArticleComponent
  },
  {
    path: "newsFeed",
    component: SourceComponent
  },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
