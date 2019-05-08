import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes: Routes = [
 {
   path: 'products',
   component: ProductsComponent
 },
 {
    path: 'product/:id',
    component: ProductDetailComponent
 },
 {
    path: 'cart',
    component: ShoppingCartComponent
 },
 {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
 }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
