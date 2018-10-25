import { ItemListComponent } from './item-list/item-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddItemComponent } from 'src/app/add-item/add-item.component';

const routes: Routes = [
  { path: 'itemList', component: ItemListComponent },
  { path: 'addItem', component: AddItemComponent }]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
