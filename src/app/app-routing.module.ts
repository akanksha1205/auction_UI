import { UpdateProductComponent } from './component/update-product/update-product.component';
import { SearchProductComponent } from './component/search-product/search-product.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { BuyerComponent } from './component/buyer/buyer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';

const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'add-product',component:AddProductComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'search',component:SearchProductComponent},
  {path:'product-details',component:ProductDetailsComponent},
  {path:'update-product',component:UpdateProductComponent},
  {path:'delete-product',component:DeleteProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const ViewToBeDisplayed = [AddProductComponent,BuyerComponent,SearchProductComponent,ProductDetailsComponent,UpdateProductComponent,DeleteProductComponent]
