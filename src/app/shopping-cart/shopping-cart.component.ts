import { Component, OnInit } from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { Item } from '../models/item';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {


  private items: Item[];
  private total = 0;
  totalNumber: number;
  totalPrice: number;

  constructor(
    private shoppingService: ShoppingService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getItems();
    this.getTotal();
  }

  getTotal(): void {
    this.shoppingService.totalNumber()
                       .subscribe(total => this.totalNumber = total);
    this.shoppingService.totalPrice()
                       .subscribe(price => this.totalPrice = price);
  }

  getTotalNumber(): number {
    return this.items.length;
  }

  backToStore(): void {
    this.router.navigate(['/', 'products']);
  }

  clearItems(): void {
    this.items = [];
    this.saveItems();
  }

  deleteItem(item: Item): void {
    for (const itemSaved of this.items) {
      if (item.product.name === itemSaved.product.name) {
        const index = this.items.indexOf(item);
        this.items.splice(index, 1);
        break;
      }
    }

    this.saveItems();
    this.getTotal();
  }

  addItem(item: Item): void {
    item.quantity++;
    this.saveItems();
    this.getTotal();

  }

  removeItem(item: Item): void {
     if (item.quantity > 1) {
       item.quantity--;
      } else {
       this.deleteItem(item);
     }
     this.saveItems();
     this.getTotal();
  }

  saveItems(): void {
    localStorage.setItem('myCart', JSON.stringify(this.items));
  }
  getItems(): void {
     const retrievedData = localStorage.getItem('myCart');
     this.items = JSON.parse(retrievedData);

  }

}
