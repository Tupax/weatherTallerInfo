import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Store, select } from "@ngrx/store";
import { WeatherService } from "../weather.service";

@Component({
  selector: "app-tiempo-actual",
  templateUrl: "./tiempo-actual.component.html",
  styleUrls: ["./tiempo-actual.component.css"],
})
export class TiempoActualComponent implements OnInit {
  loc$: Observable<string>;
  loc: string;
  currentWeather: any = <any>{};
  msg: string;
  
  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
      this.searchWeatherTiempoActual(loc);
    });
  }


  ngOnInit() {}

  searchWeatherTiempoActual(loc: string) {
    this.msg = "";
    this.currentWeather = {};
    this.weatherService.getCurrentWeather(loc).subscribe(
      (res) => {
        this.currentWeather = res;
        console.log(this.currentWeather);
      },
      (err) => {
        if (err.error && err.error.message) {
          // alert(err.error.message);
          this.msg = err.error.message;
          return;
        }
        alert("Error al intentar conseguir el clima.");
      },
      () => {}
    );
  }

  resultFound() {
    // console.log(this.currentWeather);
    return Object.keys(this.currentWeather).length > 0;
  }
}
