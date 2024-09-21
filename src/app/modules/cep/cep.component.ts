import { Component, OnInit } from '@angular/core';
import { AddressViaCepModel, AddressModel } from 'src/app/shared/interfaces/address.model';
import { MatDialog } from '@angular/material/dialog';
import { AddressDialogComponent } from 'src/app/shared/components/address-dialog/address-dialog.component';
import { AddressService } from 'src/app/shared/services/address.service';

@Component({
  selector: 'app-cep',
  templateUrl: './cep.component.html',
  styleUrls: ['./cep.component.scss']
})
export class CepComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    private addressService: AddressService
  ) { }

  ngOnInit(): void {

  }

  saveSearchAddress(address: AddressViaCepModel) {
    let addressPost: AddressModel = {
      address: '',
      zipcode: address.cep,
      date: new Date()
    }
    addressPost.address = (address.logradouro) ? address.logradouro + ', ' : '';
    addressPost.address += (address.bairro) ? address.bairro + ', ' : '';
    addressPost.address += `${address.localidade} - ${address.uf}`;
    this.addressService.postAddress(addressPost).subscribe(
      (data: AddressModel) => {
        this.addressService.changeDataSub(data);
      }
    );
    this.openDialogAddress(address);
  }

  openDialogAddress(address: AddressViaCepModel) {
    this.dialog.open(AddressDialogComponent, {
      width: '650px',
      data: address,
    });
  }

}
