import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthComponent } from "./auth/auth.component";
import { FooterComponent } from "./footer/footer.component";
import { SourceComponent } from "./source/source.component";
import { SelectSourceComponent } from "./select-source/select-source.component";
import { FilterComponent } from "./filter/filter.component";
import { HttpClientModule } from "@angular/common/http";
import { NewsService } from "./news.service";
import { NewsFeedComponent } from "./news-feed/news-feed.component";
import { CreateArticleComponent } from "./create-article/create-article.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FilterPipe } from "../app/Pipes/filter.pipe";
import { AuthService } from "./auth.service";
import { InfoComponent } from "./info/info.component";

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FooterComponent,
    SourceComponent,
    SelectSourceComponent,
    FilterComponent,
    NewsFeedComponent,
    CreateArticleComponent,
    PageNotFoundComponent,
    FilterPipe,
    InfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [NewsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
