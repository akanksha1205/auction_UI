import { AddProduct } from './add-product';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, catchError, map, Observable, throwError } from 'rxjs';
import { BidProduct } from './bid-product';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  public resList:any = [];

  REST_API: string = "http://localhost:9091/eauction/api/v1/seller";
  REST_API2: string = "http://localhost:9090/eauction/api/v1/buyer";
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }
  addProduct(data: any): Observable<any> {
    var addProduct = new AddProduct();
    addProduct.productName=data.productName;
    addProduct.shortDescription=data.shortDescription;
    addProduct.detailedDescription=data.detailedDescription;
    addProduct.category = data.category;
    addProduct.startingPrice = data.startingPrice;
    addProduct.bidEndDate = data.bidEndDate;
    addProduct.sellerFirstName=data.sellerFirstName;
    addProduct.sellerLastName = data.sellerLastName;
    addProduct.sellerAddress=data.sellerAddress;
    addProduct.sellerCity=data.sellerCity;
    addProduct.sellerState = data.sellerState;
    addProduct.sellerPin = data.sellerPin;
    addProduct.sellerPhone = data.sellerPhone;
    addProduct.sellerEmail=data.sellerEmail;
    console.log("type of date is = ",typeof(data.bidEndDate))
   
    let API_URL = `${this.REST_API}/addproduct`;
    return this.httpClient.post(API_URL, addProduct).pipe(catchError(this.handleError));
  }

  bidProduct(data: any): Observable<any> {
    var bidProduct = new BidProduct();
    bidProduct.firstName=data.firstName;
    bidProduct.lastName = data.lastName;
    bidProduct.emailId=data.emailId;
    bidProduct.address=data.address;
    bidProduct.city = data.city;
    bidProduct.state = data.state;
    bidProduct.pin = data.pin;
    bidProduct.phone=data.phone;
    bidProduct.productId = data.productId;
    bidProduct.bidAmount=data.bidAmount;
    console.log("type of date is = ",typeof(data.productId))
   
    let API_URL = `${this.REST_API2}/placebid`;
    return this.httpClient.post(API_URL, bidProduct).pipe(catchError(this.handleError));
  }

  
  deleteProduct(id: any): Observable<any> {
    let API_URL = `${this.REST_API}/delete/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders }).pipe(catchError(this.handleError))
  }

  showBids(id: any) {
    return this.httpClient.get(`${this.REST_API}/showbids/${id}`).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError))
  }

  updateBids(id: any,buyerEmailld:any,newBidAmount:any) {
    return this.httpClient.get(`${this.REST_API2}/updatebid/${id}/${buyerEmailld}/${newBidAmount}`).pipe(map((res: any) => {
      return res || {}
    }),
      catchError(this.handleError))
  }

  
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      //handlling client error
      errorMessage = error.error.message;
    }
    else {
      //handling server error
      errorMessage = `Error Code : ${error.status}\nMessage: ${error.message}`
    }
    console.log(errorMessage);
    return throwError(errorMessage);

  }

  setProductList(data:any){
    this.resList = data;

  }
  getProductList(){
    return this.resList;

  }

  
}
