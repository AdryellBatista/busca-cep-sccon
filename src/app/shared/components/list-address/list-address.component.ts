import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { AddressModel } from '../../interfaces/address.model';
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.scss']
})
export class ListAddressComponent implements OnInit, AfterViewInit {

  arAddress: AddressModel[] = [];
  displayedColumns: string[] = ['zip', 'address', 'date', 'actions'];
  dataSource = new MatTableDataSource<AddressModel>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private addressService: AddressService
  ) { }

  ngOnInit(): void {
    this.getAddress();
    this.addressService.currentData.subscribe(
      (dataSub: AddressModel) => {
        this.getAddress();
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  getAddress() {
    this.addressService.getAddressAll().subscribe(
      (data: AddressModel[]) => {
        console.log(data);
        this.arAddress = data.reverse();
        this.dataSource = new MatTableDataSource<AddressModel>(
          this.arAddress
        );
        this.dataSource.paginator = this.paginator;
      }
    );
  }

  delete(id: number) {
    this.addressService.deleteAddress(id).subscribe(
      (data: any) => {
        this.getAddress();
      }
    );
  }
}

