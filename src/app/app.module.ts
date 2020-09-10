import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { WeatherService } from "./weather.service";
import { AuthService } from "./auth.service";

import { AppRoutingModule } from "./app-routing.module";

import { locationReducer } from "./location-reducer";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatInputModule } from "@angular/material/input";
import { MatTabsModule } from "@angular/material/tabs";
import { MatCardModule } from "@angular/material/card";
import { MatListModule } from "@angular/material/list";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { StoreModule } from "@ngrx/store";
import { AngularFireLite } from "angularfire-lite";
import { CovidModule } from "./covid/covid.module";
import { NguiAutoCompleteModule } from "@ngui/auto-complete";

import { AppComponent } from "./app.component";
import { HomePageComponent } from "./home-page/home-page.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { TiempoActualComponent } from "./tiempo-actual/tiempo-actual.component";
import { PronostricoComponent } from "./pronostrico/pronostrico.component";
import { UvComponent } from "./uv/uv.component";
import { AlertasComponent } from "./alertas/alertas.component";
import { TestComponent } from "./test/test.component";
import { environment } from "src/environments/environment";
import { ErrorComponent } from "./error/error.component";
import { LoginComponent } from "./login/login.component";
import { HijoComponent } from "./hijo/hijo.component";
import { PadreComponent } from "./padre/padre.component";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TopBarComponent,
    TiempoActualComponent,
    PronostricoComponent,
    UvComponent,
    AlertasComponent,
    TestComponent,
    ErrorComponent,
    LoginComponent,
    HijoComponent,
    PadreComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireLite.forRoot(environment.config),
    NguiAutoCompleteModule,
    AppRoutingModule,
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
    CovidModule,
    MatIconModule,
  ],
  providers: [WeatherService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
