import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Products } from '../models/products';
import { ActivatedRoute } from '@angular/router';
import { ShoppingService } from '../shopping.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

 product: Product;
 products = Products;
 totalPrice: number;
 totalNumber: number;

 private nutrients = ['Carotenoid', 'Vitamin',  'Folates', 'Potassium', 'Fiber'];
 private amount = ['Negligible', 'Low', 'Average', 'Good', 'Great'];
 private percent = [
                 'below 5%',
                 'between 5 and 10%',
                 'between 10 and 20%',
                 'between 20 and 40%',
                 'above 40%'
                ];

  constructor(
    private route: ActivatedRoute,
    private shoppingService: ShoppingService,
    private router: Router
   ) {}

  getProduct(id: number): void {
     for (const product of this.products) {
       if (product.sku === id) {
         this.product = product;
         return ;
       }
     }

  }

  addToCart(product: Product): void {
    this.shoppingService.addToCart(product);
    this.getCart();
  }

  remove(product: Product): void {
    this.shoppingService.deleteItem(product);
    this.getCart();
  }

  backToStore(): void {
    this.router.navigate(['/', 'products']);
  }

  getCart(): void {
    this.shoppingService.totalNumber()
                        .subscribe(totalNumber => this.totalNumber = totalNumber);
    this.shoppingService.totalPrice()
                        .subscribe(totalPrice => this.totalPrice = totalPrice);
  }
  isInCart(product: Product): boolean {
    return this.shoppingService.isInCart(product);
  }
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getProduct(id);
    this.getCart();
  }

}
