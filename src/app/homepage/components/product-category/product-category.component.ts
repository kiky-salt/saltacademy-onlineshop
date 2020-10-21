import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { HomepageService } from '../../homepage.service';
import { ProductCategory } from '../../models/ProductCategory';

@Component({
  selector: 'app-product-category',
  templateUrl: './product-category.component.html',
  styleUrls: ['./product-category.component.css']
})
export class ProductCategoryComponent implements OnInit {
  productCategory$: Observable<ProductCategory[]>;

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.productCategory$ = this.homepageService.getProductCategory();
  }

}
