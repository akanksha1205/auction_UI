import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.scss']
})
export class DeleteProductComponent {

  constructor(private service: CrudService, private route: Router) {

  }

  deleteform = new FormGroup({
    id: new FormControl("")
  });

 delete(){
  if (window.confirm("Product will be deleted permanentely")) {
    var cred = {
      id: ""
    
    };
    cred.id = this.deleteform.value.id!;
    this.service.deleteProduct(cred.id).subscribe((res) => {
      console.log("response is",res)

      if(res.errorMsg == null){
        alert(res.successMsg);
      }
      else{
        alert(res.errorMsg);
      }
    });

  }
 }
  
 
}


