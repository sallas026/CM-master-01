import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class productService {

  private productsList = new BehaviorSubject([] as any[]);
  productsList$ = this.productsList.asObservable();

  constructor(private http: HttpClient) { }

  // getUsersList() {
  //   const url = 'https://jsonplaceholder.typicode.com/users';
  //   this.http.get(url,{observe: 'body'}).subscribe((res) => {
  //    this.productsList.next(res as any[]); 
  //   })
  // }

  getUsersList() {
    const url = 'https://jsonplaceholder.typicode.com/comments';
    return this.http.get(url);
  }
}
