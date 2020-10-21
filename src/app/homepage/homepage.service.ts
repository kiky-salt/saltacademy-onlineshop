import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ProductCategory } from './models/ProductCategory';
import { Product } from './models/Product';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {

  constructor(private http: HttpClient) { }

  private getData(response: any): any {
    return response.data;
  }

  getProductCategory(): Observable<ProductCategory[]> {
    return this.http.get<ProductCategory[]>(environment.backendURL + 'product-category')
      .pipe(
        map(this.getData)
      );
  }

  getFeaturedProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(environment.backendURL + 'product/feature')
      .pipe(
        map(this.getData)
      );
  }
}
