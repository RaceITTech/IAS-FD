import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-marketing-nav',
  templateUrl: './marketing-nav.component.html',
  styleUrls: ['./marketing-nav.component.scss']
})
export class MarketingNavComponent {
  whatsappMessage: string = '';
  whatsappUrl: string = '';

  constructor(private router: Router) {
    this.updateWhatsappMessage();
  }

  updateWhatsappMessage() {
    const currentUrl = this.router.url;
    console.log(currentUrl)

    // Customize the message based on the URL
    if (currentUrl.includes('/tnpsc-online')) {
      this.whatsappMessage = "I'm Interested in TNPSC Group I course";
    } else {
      this.whatsappMessage = "I'm Interested in UPSC Coaching";
    }

    // Update the WhatsApp URL with the encoded message
    this.whatsappUrl = `https://wa.me/9043338230?text=${encodeURIComponent(this.whatsappMessage)}`;
  }

}
