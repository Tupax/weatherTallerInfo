import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";


import { WeatherService } from "./weather.service";

import { AppRoutingModule } from "./app-routing.module";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { locationReducer } from "./location-reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { TiempoActualComponent } from "./tiempo-actual/tiempo-actual.component";
import { PronostricoComponent } from "./pronostrico/pronostrico.component";
import { UvComponent } from "./uv/uv.component";
import { AlertasComponent } from "./alertas/alertas.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    TiempoActualComponent,
    PronostricoComponent,
    UvComponent,
    AlertasComponent,
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    StoreModule.forRoot({
      loc: locationReducer,
    }),
    FormsModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule,
    HttpClientModule,
    MatDividerModule,
    MatListModule,
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent],
})
export class AppModule {}
