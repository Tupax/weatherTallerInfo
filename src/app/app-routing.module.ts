import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


import { LoginComponent } from "./login/login.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { HomePageComponent } from "./home-page/home-page.component";

const routes: Routes = [
  {path : "test", component: HomePageComponent },
  { path: "", component: HomePageComponent },
  { path: "login", component: LoginComponent },
  { path: "topbar", component: TopBarComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
