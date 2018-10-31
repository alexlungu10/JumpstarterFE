import { ItemListComponent } from './item-list/item-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from 'src/app/add-item/add-item.component';
import {OrderUpdateComponent} from './order-update/order-update.component';

const routes: Routes = [
  { path: 'itemList', component: ItemListComponent },
  { path: 'addItem', component: AddItemComponent },
  { path: 'updateItem', component: OrderUpdateComponent }]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
