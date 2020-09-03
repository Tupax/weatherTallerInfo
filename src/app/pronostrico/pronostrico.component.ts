import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-pronostrico",
  templateUrl: "./pronostrico.component.html",
  styleUrls: ["./pronostrico.component.css"],
})
export class PronostricoComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  forecast: any = <any>{};
  msg: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
      this.searchWeatherPronostico(loc);
    });
  }
  ngOnInit() {}

  searchWeatherPronostico(loc: string) {
    this.msg = "";
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc).subscribe(
      (res) => {
        this.currentWeather = res;
      },
      (err) => {},
      () => {
        this.searchForecastPronostico(loc);
      }
    );
  }
  searchForecastPronostico(loc: string) {
    this.weatherService.getForecast(loc).subscribe(
      (res) => {
        this.forecast = res;
      },
      (err) => {}
    );
  }
  resultFound() {
    return Object.keys(this.currentWeather).length > 0;
  }
}
