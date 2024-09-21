import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CepService } from '../../services/cep.service';
import { AddressViaCepModel } from '../../interfaces/address.model';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search-cep',
  templateUrl: './search-cep.component.html',
  styleUrls: ['./search-cep.component.scss']
})
export class SearchCepComponent implements OnInit {

  @Output() searchEvent = new EventEmitter();

  form: FormGroup = this.fb.group({
    cep: ['', Validators.required],
  });
  
  constructor(
    private fb: FormBuilder,
    private cepService: CepService,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  searchAddress() {
    this.cepService.getAddressCEP(this.form.value.cep).subscribe(
      (address: AddressViaCepModel) => {
        console.log(address);
        if ((<any>Object).hasOwn(address, 'erro')) {
          this._snackBar.open('CEP não encontrado!', 'Ok', {
            duration: 7000
          });
        } else {
          this.searchEvent.emit(address);
        }
      }
    );
  }

}
