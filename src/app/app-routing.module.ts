import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAddressComponent } from './add-address/add-address.component';
import { ViewAddressComponent } from './view-address/view-address.component';
import { DeleteAddressComponent } from './delete-address/delete-address.component';
import { UpdateAddressComponent } from './update-address/update-address.component';


const routes: Routes = [
  { path: 'add-address', component: AddAddressComponent },
  { path: 'view-address', component: ViewAddressComponent },
  { path: 'update-address', component: UpdateAddressComponent },
  { path: 'delete-address', component: DeleteAddressComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
