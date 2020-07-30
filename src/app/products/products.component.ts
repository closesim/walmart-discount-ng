import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productsDataService: ProductsService) { }

  @Input() query: string;
  public products: any = [];

  ngOnInit(): void {
    this.getProductsList();
  }

  ngOnChanges(): void {
    this.getProductsList();
  }

  private getProductsList(): void {
    this.productsDataService.getProducts(this.query).subscribe((info) => {
      this.products = info;
    });
  }

}
