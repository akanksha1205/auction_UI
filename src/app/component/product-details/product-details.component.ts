import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit{

  public results: any = [];

  constructor(private crudApi: CrudService, route: Router) { }
  ngOnInit() {
    // window.location.reload()
   
    this.results = this.crudApi.getProductList()
    console.log("product is",this.results)

  }

 
  
}
