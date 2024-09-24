import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css'
})
export class CategoriesComponent implements OnInit {
  constructor(private _productService:ProductsService) {
  }

  categories:any[]=[];
  subcategories:any[]=[];
  ngOnInit(): void {
      this._productService.getCategories().subscribe({
        next:(response)=>{
          this.categories=response.data;
        }
      })
      this._productService.getSubCategories().subscribe({
        next:(response)=>{
          this.subcategories=response.data;
        }
      })
  }
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 6
      },
    },
    nav: true
  }
}
