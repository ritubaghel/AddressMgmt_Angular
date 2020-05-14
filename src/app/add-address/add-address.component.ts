import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';
import { FileDetector } from 'protractor';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.component.html',
  styleUrls: ['./add-address.component.css']
})
export class AddAddressComponent implements OnInit {

  constructor() { }
  address : Address=null;
  ngOnInit(): void {
  }
  addAddress(form:any)
  {
    let data = form.value;
    let addressId = data.addressId;
    let retailerId = data.retailerId;
    let city = data.city;
    let zip = data.zip;
    let field=data.field
    let state = data.state;
    this.address = new Address();
    this.address.addressId = addressId;
    this.address.retailerId = retailerId;
    this.address.city = city;
    this.address.state = state;
    this.address.zip = zip;
    this.address.field = field;
    form.reset();
  }
}
