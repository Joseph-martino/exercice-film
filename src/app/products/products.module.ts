import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPageComponent } from './products-page/products-page.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsPageComponent,
    ProductListComponent,
    ProductCardComponent,
    ProductDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductsPageComponent
  ]
})
export class ProductsModule { }
