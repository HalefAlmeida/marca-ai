import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Products } from '../shared/models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly apiEndpoint: string = '/products';
  constructor(private http: HttpClient) {}

  listAll() {
    return this.http.get<Products[]>(
      `${environment.API_URL}${this.apiEndpoint}`
    );
  }
}
