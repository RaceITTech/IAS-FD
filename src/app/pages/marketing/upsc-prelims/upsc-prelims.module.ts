import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpscPrelimsRoutingModule } from './upsc-prelims-routing.module';
import { UpscPrelimsComponent } from './upsc-prelims.component';
import { FormsModule } from '@angular/forms';
import { NgOtpInputModule } from 'ng-otp-input';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [UpscPrelimsComponent],
  imports: [
    CommonModule,
    UpscPrelimsRoutingModule,
    SharedModule,
    FormsModule,
    NgOtpInputModule,
  ],
})
export class UpscPrelimsModule {}
