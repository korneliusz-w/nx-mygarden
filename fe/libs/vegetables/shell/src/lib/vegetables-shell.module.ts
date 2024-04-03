import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { vegetablesShellRoutes } from './lib.routes';
import { VegetablesShellComponent } from './vegetables-shell.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(vegetablesShellRoutes)],
  declarations: [VegetablesShellComponent],
})
export class VegetablesShellModule {}
