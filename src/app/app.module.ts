import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddAddressComponent,
    ViewAddressComponent,
    UpdateAddressComponent,
    DeleteAddressComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
