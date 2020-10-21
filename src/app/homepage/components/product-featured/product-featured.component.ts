import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HomepageService } from '../../homepage.service';
import { Product } from '../../models/Product';

@Component({
  selector: 'app-product-featured',
  templateUrl: './product-featured.component.html',
  styleUrls: ['./product-featured.component.css']
})
export class ProductFeaturedComponent implements OnInit {
  products: Product[];
  title = 'Feature Product Homepage';

  constructor(private homepageService: HomepageService) { }

  ngOnInit(): void {
    this.homepageService.getFeaturedProduct()
      .subscribe(
        response => {
          this.products = response;
        }
      );
  }

}
