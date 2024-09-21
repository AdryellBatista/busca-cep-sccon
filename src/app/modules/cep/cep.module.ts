import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CepRoutingModule } from './cep-routing.module';
import { CepComponent } from './cep.component';
import { ListAddressModule } from 'src/app/shared/components/list-address/list-address.module';
import { SearchCepModule } from 'src/app/shared/components/search-cep/search-cep.module';
import { AddressDialogModule } from 'src/app/shared/components/address-dialog/address-dialog.module';


@NgModule({
  declarations: [
    CepComponent
  ],
  imports: [
    CommonModule,
    CepRoutingModule,
    ListAddressModule,
    SearchCepModule,
    AddressDialogModule
  ]
})
export class CepModule { }
