import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { Observable } from "rxjs";
import { AuthService } from "../auth.service";
// import { Observable } from "rxjs";
// import { environment } from "src/environments/environment";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"],
})
export class HomePageComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  loc2: string;

  // test = "padre";
  // test = environment.production;
  constructor(private store: Store<any>, private auth: AuthService) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
    });
  }

  ngOnInit() {
    console.log("arranco");
    // this.auth.signup("oaksseba@gmail.com", "123456789");
  }

  childToParent(name) {
    this.loc2 = name;
    console.log(this.loc2);
  }
}
