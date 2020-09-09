import { Injectable } from "@angular/core";
import {
  AngularFireLiteAuth,
  AngularFireLiteFirestore,
} from "angularfire-lite";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(public auth: AngularFireLiteAuth) {}

  signup(email, pass) {
    return this.auth.signup(email, pass);
  }
}
