import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../Services/products.service';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';




@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink,CommonModule,CarouselModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  constructor(private _ActivatedRoute:ActivatedRoute, private _productService:ProductsService){}
  produtId:any;
  productDetails:any;
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe((params)=>{
      this.produtId=params.get('id');
    })
    this._productService.getProductDetails(this.produtId).subscribe({
      next:(response)=> this.productDetails = response.data
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
        items: 1
      },
    },
    nav: true
  }
}
