import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment-failed',
  templateUrl: './payment-failed.component.html',
  styleUrls: ['./payment-failed.component.scss']
})
export class PaymentFailedComponent {
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
          console.dir(response)
        });
    } else {
      this.router.navigate(['/']);
    }
  }
}