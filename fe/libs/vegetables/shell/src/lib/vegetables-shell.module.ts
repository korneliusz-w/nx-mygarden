import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { vegetablesShellRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(vegetablesShellRoutes)],
  declarations: [],
})
export class VegetablesShellModule {}
