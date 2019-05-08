import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Item } from '../models/item';
import { Product } from '../models/product';
import { Products } from '../models/products';


import
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  AllProducts = Products;
  items: Item[];
  totalNumber: number;
  totalPrice: number;
  constructor(private shoppingService: ShoppingService) { }

  addToCart(product: Product): void {
   this.shoppingService.addToCart(product);
   this.getCart();
  }

  getCart(): void {
    this.shoppingService.totalNumber()
                        .subscribe(total => this.totalNumber = total);
    this.shoppingService.totalPrice()
                        .subscribe(price => this.totalPrice = price);
  }

  ngOnInit() {
    this.shoppingService.getItems()
                        .subscribe(items => this.items = items);
    this.getCart();
  }
}
