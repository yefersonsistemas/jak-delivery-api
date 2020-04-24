import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartshoppingService {

  private shoppingCart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() { }

  getCart() {
    return this.shoppingCart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  // addProduct(product) {
  //   let added = false;
  //   for (let p of this.shoppingCart) {
  //     if (p.id === product.id) {
  //       p.amount += 1;
  //       added = true;
  //       break;
  //     }
  //   }
  //   if (!added) {
  //     product.amount = 1;
  //     this.shoppingCart.push(product);
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value + 1);
  // }

  // decreaseProduct(product) {
  //   for (let [index, p] of this.shoppingCart.entries()) {
  //     if (p.id === product.id) {
  //       p.amount -= 1;
  //       if (p.amount === 0) {
  //         this.shoppingCart.splice(index, 1);
  //       }
  //     }
  //   }
  //   this.cartItemCount.next(this.cartItemCount.value - 1);
  // }

  // removeProduct(product) {
  //   for (let [index, p] of this.shoppingCart.entries()) {
  //     if (p.id === product.id) {
  //       this.cartItemCount.next(this.cartItemCount.value - p.amount);
  //       this.shoppingCart.splice(index, 1);
  //     }
  //   }
  // }


}
