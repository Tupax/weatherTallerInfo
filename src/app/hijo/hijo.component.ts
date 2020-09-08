import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-hijo",
  templateUrl: "./hijo.component.html",
  styleUrls: ["./hijo.component.css"],
})
export class HijoComponent implements OnInit {
  @Input() testhijo: string;
  @Output() clickHijo = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit(): void {
    console.log("esto es un mensaje de mi padre", this.testhijo);


    setInterval(() => {
      this.counter++;
    }, 1000);
   
  }

  botonClick() {
    this.clickHijo.emit(this.counter);
    console.log(this.counter);
  }
}
