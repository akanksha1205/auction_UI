import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.scss']
})
export class UpdateProductComponent {
  public newProductList: any=[];
  constructor(private service:CrudService,private route:Router){

  }

  ngOnInit() {
    // window.location.reload()
   
    
    this.newProductList = this.service.getProductList();
    console.log("newProductList is",this.newProductList);

  }

  
  bidform = new FormGroup({
  
    emailId:new FormControl(this.newProductList[0]),
    productId : new FormControl(),
    bidAmount : new FormControl()
   
  });

  bidSubmitted(){
    var cred={
      emailId:"",
      productId:1,
      bidAmount:""
      
    };

    cred.emailId=this.bidform.value.emailId;
    cred.productId=this.bidform.value.productId;
    cred.bidAmount=this.bidform.value.bidAmount;

    console.log("cred is",cred)
    this.service.updateBids(cred.productId,cred.emailId,cred.bidAmount).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("Object is",obj);
      console.log("response is = ",obj.indexOf("Successfully"));
      console.log("message is",res);
      if(res.errorMsg == null){
        alert(res.successMsg);
      }
      else{
        alert(res.errorMsg);
      }
      
    });
  

  }
}
