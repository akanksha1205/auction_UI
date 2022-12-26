import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, ViewToBeDisplayed } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddProductComponent } from './component/add-product/add-product.component';
import { BuyerComponent } from './component/buyer/buyer.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { SearchProductComponent } from './component/search-product/search-product.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateProductComponent } from './component/update-product/update-product.component';
import { DeleteProductComponent } from './component/delete-product/delete-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewToBeDisplayed,
    AddProductComponent,
    BuyerComponent,
    DashboardComponent,
    ProductDetailsComponent,
    SearchProductComponent,
    UpdateProductComponent,
    DeleteProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
