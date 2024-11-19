import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreeDownloadRoutingModule } from './free-download-routing.module';
import { FreeDownloadComponent } from './free-download.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    FreeDownloadComponent
  ],
  imports: [
    CommonModule,
    FreeDownloadRoutingModule,FormsModule,SharedModule
  ]
})
export class FreeDownloadModule { }
