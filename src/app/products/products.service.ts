import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient: HttpClient) { }

  public getProducts(query: string): Observable<any> {

    let parameter = new HttpParams();     
    if(!query) query ="dcc";
    parameter = parameter.append('term', query);    

    return this.httpClient.get("https://palindrome-discount.herokuapp.com/walmart-discount/api/products/search", { params: parameter });

  }


}
