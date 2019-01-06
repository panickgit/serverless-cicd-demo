import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Product } from '../product';

@Injectable()
export class ProductsService {

  productsUrl = 'https://staging-dot-gcb-serverless-demo.appspot.com/products';

  constructor(private http: HttpClient) { }

  getProducts (): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
