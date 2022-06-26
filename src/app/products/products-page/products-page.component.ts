import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { albums, films } from 'src/app/data';


@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPageComponent implements OnInit {

  filmList: Product[];
  albumList: Product[];
  
  constructor() {
    this.filmList = films;
    this.albumList = albums;
   }

  ngOnInit(): void {
  }

}
