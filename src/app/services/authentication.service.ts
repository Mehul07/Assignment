import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) { }

  authenticateUser(userName: string, password: string): Observable<any> {
    let userFound = false;
    let userObj = {};
    return this.http.get("assets/users/users.json").pipe(
      map((response: []) => {
        response.forEach((item, index) => {
          if (item["username"] === userName && item["password"] === password && !userFound) {
            userFound = true;
            userObj = {
              "username": userName,
              "token": "valid-token"
            }
          }
        });
        if (userFound && userObj["token"]) {
          return of(userObj);
        }
      } ), catchError(err => { return throwError("Invalid user") }));
  }
}
