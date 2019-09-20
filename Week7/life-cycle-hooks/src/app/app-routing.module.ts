import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Test1Component } from "./test1/test1.component";
import { Test2Component } from "./test2/test2.component";
import { TestComponent } from "./test/test.component";
const routes: Routes = [
  {
    path: "",
    component: Test1Component
  },

  {
    path: "test2",
    component: Test2Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
