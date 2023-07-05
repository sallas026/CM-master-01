import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class productService {

  constructor(private http: HttpClient) { }

  getUsersList() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    this.http.get('url').subscribe(res => {
      console.log(res);
    })
  }
}
