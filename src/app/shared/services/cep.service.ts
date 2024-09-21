import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AddressViaCepModel } from '../interfaces/address.model';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor(private http: HttpClient) {}

  getAddressCEP(cep: string): Observable<AddressViaCepModel> {
    return this.http.get<AddressViaCepModel>(`${environment.URL_API_VIA_CEP}${cep}/json/`);
  }
}
