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
  showSpinner = false;
  public showProducts = true;

  ngOnInit(): void {
    this.getProductsList();
  }

  ngOnChanges(): void {
    this.getProductsList();
  }

  private getProductsList(): void {
    this.showProducts = true
    this.showSpinner = true;
    this.productsDataService.getProducts(this.query).subscribe((info) => {
      this.products = info;
      this.showSpinner = false;
      if (this.products.length === 0) {
        this.showProducts = false;
      }
    });
  }


  slides: any = [[]];
  private chunk(arr, chunkSize) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

}
