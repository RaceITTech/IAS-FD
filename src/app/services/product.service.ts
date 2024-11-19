import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface ProductDetails {
  product: string;
  amount: string;
  samt: string;
  batch: string[];
  courseId: string;
  totalAmount:string
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly backendUrl = environment.backend;
  private readonly productRoute = environment.productRoute;

  public product!: string;
  public amount!:string;
  public samt!:string;
  public batch!:string[];
  public courseId!:string;
  public totalAmount!:string;
  public zohoItemId!:string;
  public productId!:string
  public zohoBatchDate!:string

  constructor(private http:HttpClient) {   }

  getProductDetails(groupId:string): Observable<ProductDetails> {
    return this.http.post<ProductDetails>(`${this.backendUrl + this.productRoute}/getProductById`, {groupId:groupId}).pipe(
      catchError((error) => {
        console.error('Error fetching product details:', error);
        return throwError(error);
      })
    );
  }

  setCourseDetails(data: any): ProductDetails {
    debugger
    this.product = data.getProduct.description;
    this.amount = data.getProduct.amount;
    this.samt = data.getProduct.samt;
   
    this.courseId = data.getProduct.courseId;
    this.totalAmount = data.getProduct.totalAmount;
    this.zohoItemId = data.getProduct.zohoItemId;
    this.productId = data.getProduct._id
    this.batch=data.getBatch.lms_code
    this.zohoBatchDate=data.getBatch.zohoBatch
    return {
      product: this.product,
      amount: this.amount,
      samt: this.samt,
      batch: this.batch,
      courseId: this.courseId,
      totalAmount:this.totalAmount
    };
  }

  getCourseDetails(){
    return {
      product: this.product,
      amount: this.amount,
      samt: this.samt,
      batch: this.batch,
      zohoBatchDate:this.zohoBatchDate,
      courseId: this.courseId,
      totalAmount:this.totalAmount,
      zohoItemId:this.zohoItemId,
      productId:this.productId
    };
  }

}