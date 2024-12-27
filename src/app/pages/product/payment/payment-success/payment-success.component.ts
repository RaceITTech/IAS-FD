import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.scss']
})

export class PaymentSuccessComponent {
  paymentDetails = {
    product: '',
    orderId: '',
    txnId: '',
    amount: '',
  };

  paymentStatus = '';

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) {
    const orderId = this.route.snapshot.paramMap.get('id');

    if (orderId) {
      this.http
        .post('https://backend.verandaias.com/verandaias/orders/getOrder', {
          orderId,
        })
        .subscribe((response: any) => {
          this.paymentDetails = response.message;

          if (response.message.status == 'success') {

            this.http
              .post(
                'https://backend.verandaias.com/verandaias/orders/doAllOrderOperations',
                { orderId }
              )
              .subscribe((data) => {});
            this.paymentStatus = response.message.status;
          } else {
            this.paymentStatus = response.message.status;
          }
        });
    } else {
      this.router.navigate(['/']);
    }
  }
}