import { Router } from '@angular/router';
import { CrudService } from './../../service/crud.service';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-buyer',
  templateUrl: './buyer.component.html',
  styleUrls: ['./buyer.component.scss']
})
export class BuyerComponent {
  constructor(private service:CrudService,private route:Router){

  }
  bidform = new FormGroup({
  
    firstName:new FormControl(),
    lastName:new FormControl(),
    emailId:new FormControl(),
    address:new FormControl(),
    city:new FormControl(),
    state:new FormControl(),
    pin:new FormControl(),
    phone:new FormControl(),
    productId : new FormControl(),
    bidAmount : new FormControl()
   
  });

  bidSubmitted(){
    var cred={
      firstName:"",
      lastName:"",
      emailId:"",
      address:"",
      city:"",
      state:"",
      pin:"",
      phone:"",
      productId:1,
      bidAmount:""
      
    };

    cred.firstName=this.bidform.value.firstName;
    cred.lastName=this.bidform.value.lastName;
    cred.emailId=this.bidform.value.emailId;
    cred.address=this.bidform.value.address;
    cred.city=this.bidform.value.city;
    cred.state=this.bidform.value.state;
    cred.pin=this.bidform.value.pin;
    cred.phone=this.bidform.value.phone;
    cred.productId=this.bidform.value.productId;
    cred.bidAmount=this.bidform.value.bidAmount;

    console.log("request is ",this.bidform.value)
    this.service.bidProduct(cred).subscribe((res) =>{
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
