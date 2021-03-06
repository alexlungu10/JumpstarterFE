import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ItemListComponent} from './item-list/item-list.component';
import {AddItemComponent} from './add-item/add-item.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { OrderUpdateComponent } from './order-update/order-update.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemListComponent,
    AddItemComponent,
    OrderUpdateComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule,
    AppRoutingModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
