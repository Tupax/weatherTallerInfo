import { Component } from "@angular/core";

@Component({
  selector: "test",
  template: `<h1>{{ title }}</h1>`,
})
export class TestComponent {
  title = "Weather";
}
