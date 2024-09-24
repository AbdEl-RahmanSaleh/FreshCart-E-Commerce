import { Component, OnInit, Pipe } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MainSliderComponent } from "../main-slider/main-slider.component";
import { CategoriesComponent } from "../categories/categories.component";
import { SearchPipe } from '../Pipes/search.pipe';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule, MainSliderComponent, CategoriesComponent,SearchPipe,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  products:any[] =[];
  searchTerm:string ='';
  constructor(private _productsService:ProductsService){
  }
  ngOnInit(): void {
    this._productsService.getProducts().subscribe({
      next:(response) =>this.products = response.data
    })
  }



}
