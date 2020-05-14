import { Component, OnInit } from '@angular/core';
import { Address } from '../model/address';

@Component({
  selector: 'app-view-address',
  templateUrl: './view-address.component.html',
  styleUrls: ['./view-address.component.css']
})
export class ViewAddressComponent implements OnInit {

  constructor() { }
  address=null;
  
findAddressById(id:String):void
{
  this.address=new Address;
  this.address.addressId="10";
  this.address.retailerId="abcd";
  this.address.city="Bhopal";
  this.address.state="MP";
  this.address.zip="abcdef";
  this.address.field="agjhgjh";
}
ngOnInit(): void {
}
viewAddress(form:any){
  let data=form.value;
  let addressId=data.addressId;
  this.findAddressById(addressId);
  form.reset();
}
}
