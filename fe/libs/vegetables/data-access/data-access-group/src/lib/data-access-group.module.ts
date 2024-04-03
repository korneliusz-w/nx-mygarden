import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataAccessGroupServiceService } from './data-access-group-service.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [DataAccessGroupServiceService]
})
export class DataAccessGroupModule {}
