import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/shared/models/products';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css'],
})
export class ProductsPageComponent implements OnInit {
  products$: Observable<Products[]>;

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.fetchAll();
  }

  fetchAll() {
    this.products$ = this.productsService.listAll();
  }
}
