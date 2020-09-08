import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-padre",
  templateUrl: "./padre.component.html",
  styleUrls: ["./padre.component.css"],
})
export class PadreComponent implements OnInit {
  testPadre: string;
  parado: any;

  constructor() {}

  ngOnInit(): void {
    this.testPadre = "esto es una prueba del padre";
  }

  manejoDePadre(contador) {
    this.parado = contador;
  }
}
