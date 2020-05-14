import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.css']
})
export class UpdateAddressComponent implements OnInit {

  constructor() { }
  address:Address = null;
  updatedAddress=null;
  updateAddress(id:String):void{
    this.address= new Address();
    this.address.addressId="10";
    this.address.retailerId="abcd";
    this.address.city="Bhopal";
    this.address.state="MP";
    this.address.field="Abc";
    this.address.zip="1234";
  }
  ngOnInit(): void {
  }
  update(form:any)
  {
    let data = form.value;
    let addressId = data.addressId;
    let retailerId = data.retailerId;
    let city = data.city;
    let zip = data.zip;
    let field=data.field
    let state = data.state;
   this.updatedAddress = new Address();
   this.updatedAddress.addressId = addressId;
   this.updatedAddress.retailerId = retailerId;
   this.updatedAddress.city = city;
   this.updatedAddress.state = state;
   this.updatedAddress.zip = zip;
   this.updatedAddress.field = field;
   this.updateAddress(addressId);
   form.reset();
  }
}
