import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum JokeType {
  all = '',
  general = 'general',
  knock_knock = 'knock-knock',
  programming = 'programming'
}

var data: any;
var single: any;

@Injectable({
  providedIn: 'root'
})

export class JokeService {

  constructor(private http: HttpClient) { }

  getJokes(): Observable<any> {
    return this.http.get("https://official-joke-api.appspot.com/jokes/ten")
      .pipe(
        map(results => {
          data = results;
          console.log(results);
          return results;
        })
      )
  }

  getJokesOnType(type: JokeType): Observable<any> {
    return this.http.get(`https://official-joke-api.appspot.com/jokes/${type}/ten`)
      .pipe(
        map(results => {
          data = results;
          console.log(results);
          return results;
        })
      )
  }

  getJokeDetails(id) {
    data.forEach(element => {
      if (element.id == id) {
        console.log(element);
        single = element;
      }
    });
    return single;
  }
}
