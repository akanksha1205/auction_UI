import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  constructor(private service:CrudService,private route:Router){

  }
  createform = new FormGroup({
    productName : new FormControl(),
    shortDescription : new FormControl(),
    detailedDescription:new FormControl(),
    category:new FormControl(),
    startingPrice:new FormControl(),
    bidEndDate:new FormControl(),
    sellerFirstName:new FormControl(),
    sellerLastName:new FormControl(),
    sellerAddress:new FormControl(),
    sellerCity:new FormControl(),
    sellerState:new FormControl(),
    sellerPin:new FormControl(),
    sellerPhone:new FormControl(),
    sellerEmail:new FormControl()

  });

  createSubmitted(){
    var cred={
      productName:"",
      shortDescription:"",
      detailedDescription:"",
      category:"",
      startingPrice:"",
      bidEndDate:"",
      sellerFirstName:"",
      sellerLastName:"",
      sellerAddress:"",
      sellerCity:"",
      sellerState:"",
      sellerPin:"",
      sellerPhone:"",
      sellerEmail:""
    };

    cred.productName=this.createform.value.productName;
    cred.shortDescription=this.createform.value.shortDescription;
    cred.detailedDescription=this.createform.value.detailedDescription;
    cred.category=this.createform.value.category;
    cred.startingPrice=this.createform.value.startingPrice;
    cred.bidEndDate=this.createform.value.bidEndDate;
    cred.sellerFirstName=this.createform.value.sellerFirstName;
    cred.sellerLastName=this.createform.value.sellerLastName;
    cred.sellerAddress=this.createform.value.sellerAddress;
    cred.sellerCity=this.createform.value.sellerCity;
    cred.sellerState=this.createform.value.sellerState;
    cred.sellerPin=this.createform.value.sellerPin;
    cred.sellerPhone=this.createform.value.sellerPhone;
    cred.sellerEmail=this.createform.value.sellerEmail;

    console.log("request is ",this.createform.value)
    this.service.addProduct(cred).subscribe((res) =>{
      var obj = JSON.stringify(res);
      console.log("response is = ",obj.indexOf("Successfully"));
      console.log("message is",res);
      if(obj.indexOf("Successfully")>1){
        alert(res.successMsg);
      }
      else{
        alert( res.errorMsg);
      }
      
    });
  

  }


}
