import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-orderstatus',
  templateUrl: './orderstatus.component.html',
  styleUrls: ['./orderstatus.component.scss'],
})
export class OrderstatusComponent {
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
        .post('https://backend.verandaias.com/verandaias/orders/getPayOrder', {
          orderId,
        })
        .subscribe((response: any) => {
          if (response.message.status == 'success') {
            this.http
              .post(
                'https://backend.verandaias.com/verandaias/orders/doAllOrderOperations',
                { orderId }
              )
              .subscribe((data) => {});
            this.paymentDetails = response.message;
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
