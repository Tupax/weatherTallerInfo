import { Component, OnInit, Input } from "@angular/core";
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
  errorMessage: string;
  @Input("childToMaster") masterName: string;

  constructor(
    private store: Store<any>,
    private weatherService: WeatherService
  ) {
    this.loc$ = store.pipe(select("loc"));
    this.loc$.subscribe((loc) => {
      this.loc = loc;
      // this.searchWeatherTiempoActual(loc);
    });
  }

  ngOnInit() {
    this.searchWeatherTiempoActual(this.masterName);
    console.log("from tiempo ", this.masterName);
  }

  show() {
    console.log("from tiempo ", this.masterName);
  }

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
          console.log(err);
          console.log(err.error);
          this.errorMessage = err.error.message;
          this.msg = err.error.message;
          setTimeout(() => (this.errorMessage = ""), 2000);
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
