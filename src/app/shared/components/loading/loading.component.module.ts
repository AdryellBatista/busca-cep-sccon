import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './loading.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [ LoadingComponent ],
  declarations: [ LoadingComponent ]
})
export class LoadingComponentModule {
}
