import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { AddressModel } from '../interfaces/address.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  address: AddressModel = {};
  private dataSub = new BehaviorSubject<object>(this.address);
  currentData = this.dataSub.asObservable();

  constructor(private http: HttpClient) {}

  changeDataSub(address: AddressModel) {
    this.dataSub.next(address);
  }

  getAddressAll(): Observable<AddressModel[]> {
    return this.http.get<AddressModel[]>(`${environment.URL_API_ADDRESS}/address`);
  }

  postAddress(address: AddressModel): Observable<AddressModel> {
    return this.http.post<AddressModel>(`${environment.URL_API_ADDRESS}/address`, address);
  }

  deleteAddress(id: number): Observable<AddressModel> {
    return this.http.delete<AddressModel>(`${environment.URL_API_ADDRESS}/address/${id}`);
  }
}
