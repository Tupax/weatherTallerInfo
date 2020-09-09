import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Store } from "@ngrx/store";
import { SET_LOCATION } from "../location-reducer";
import { NgForm } from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import {first} from 'rxjs/operators';

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.css"],
})
export class TopBarComponent implements OnInit {
  loc: string;
  capitales = [];
  @Output() childToParent = new EventEmitter<String>();

  constructor(private http: HttpClient,private store: Store<any>) {}

  ngOnInit() {

    this.http.get('https://restcountries.eu/rest/v2/all').pipe((first())).subscribe((countries: Array<any>) => {
      countries.forEach((country: any) => {
        if (country.capital.length) {
          this.capitales.push(country.capital);
        }
      });
      this.capitales.sort();
    });

  }
  sendToParent(name){this.childToParent.emit(name);}

  search(lo: any) {
    // this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
    this.sendToParent(this.loc);
  }
  // search(searchForm: NgForm) {
  //   if (searchForm.invalid) {
  //     return;
  //   }
  //   this.store.dispatch({ type: SET_LOCATION, payload: this.loc });
  // }
}
