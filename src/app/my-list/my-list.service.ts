import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class MyListService {

  constructor(private http: Http) { }


  getRandom() {
    return this.http.get('https://baconipsum.com/api/?type=all-meat&sentences=1')
      .map((res) => res.json())
  }
}
