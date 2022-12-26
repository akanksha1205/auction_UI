import { CrudService } from './../../service/crud.service';
import { Component, Input, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.scss']
})
export class SearchProductComponent {

  productlist: any = []

  constructor(private service: CrudService, private route: Router) {

  }


  searchform = new FormGroup({
    id: new FormControl("")
  });

  searchSubmitted() {
    var cred = {
      id: ""
    
    };
    cred.id = this.searchform.value.id!;

    this.service.showBids(cred.id).subscribe((res) => {
      console.log("response is",res)
      this.productlist = res.bidingDetails
      console.log(" product list response is",res.bidingDetails)
      this.service.setProductList(this.productlist)

      this.route.navigate(['/product-details']);
    });
  }
 
}
