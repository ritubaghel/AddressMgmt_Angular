import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-delete-address',
  templateUrl: './delete-address.component.html',
  styleUrls: ['./delete-address.component.css']
})
export class DeleteAddressComponent implements OnInit {

  constructor() { }
  address:Address=null;
  ngOnInit(): void {
  }
  deleteAddress(form:any)
  {
   
  }
}
