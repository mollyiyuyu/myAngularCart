import { Injectable } from '@angular/core';
import { Product } from './models/product';
import { Item } from './models/item';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class ShoppingService {

  private items: Item[] = [];
  totalP = 0;
  totalN = 0;

  addToCart(product: Product): void {
    let hasItem = false;
    const newItem: Item = {
          product: product,
          quantity: 1
    };

    if (this.items.length !== 0) {
      for (const item of this.items) {
        if (item.product.sku === product.sku) {
          item.quantity++;
          hasItem = true;
          break;
        }
      }
      if (hasItem === false) {
        this.items.push(newItem);
      }
     } else {
        this.items.push(newItem);
     }
     this.saveItems();
     this.totalNumber().subscribe(total => this.totalN = total);
     this.totalPrice().subscribe(total => this.totalP = total);
  }

  saveItems(): void {
    localStorage.setItem('myCart', JSON.stringify(this.items));
    this.getItems().subscribe(items => this.items = items);
  }

  getItems(): Observable<Item[]> {
    const retrievedData = localStorage.getItem('myCart');
    const items = JSON.parse(retrievedData);
    return of(items);
  }

  deleteItem(product: Product): void {
    this.getItems()
        .subscribe(items => this.items = items);
    for (const item of this.items) {
      if (item.product.name === product.name) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        break;
      }
    }
    this.saveItems();
  }

  totalNumber(): Observable<number> {
    this.getItems()
        .subscribe(items => this.items = items);
    if (this.items.length !== 0) {
      let quantity = 0;
      for (const item of this.items) {
        quantity += item.quantity;
      }
      this.totalN = quantity;
      return of(this.totalN);
    } else {
    return of(0);
    }
  }

  totalPrice(): Observable<number> {
    this.getItems()
        .subscribe(items => this.items = items);
    if (this.items.length !== 0) {
      let price = 0;
      for (const item of this.items) {
        price += item.product.price * item.quantity;
      }
      this.totalP = price;
      return of(this.totalP);
    } else {
      return of(0);
    }
  }

  isInCart(product: Product): boolean {
    this.getItems()
        .subscribe(items => this.items = items);
    if (this.items.length === 0) {
      return false;
    } else {
      let found = false;
      for (const item of this.items) {
        if (item.product.sku === product.sku) {
         found = true;
        }
      }
    return found;
    }
   }

  constructor(){ };
}
