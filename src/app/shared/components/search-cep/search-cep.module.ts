import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchCepComponent } from './search-cep.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NgxMaskModule } from 'ngx-mask';
import { MatSnackBarModule } from '@angular/material/snack-bar';
@NgModule({
  declarations: [
    SearchCepComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    NgxMaskModule.forRoot(),
  ],
  exports: [
    SearchCepComponent
  ]
})
export class SearchCepModule { }
