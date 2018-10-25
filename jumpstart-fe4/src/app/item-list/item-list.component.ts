import { ItemServiceService } from './../item-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  constructor(private itemService: ItemServiceService) {}

  public itemList:Order[];
  ngOnInit() {
    this.itemService.getItemList().subscribe(res => {
      console.log(res);
      this.itemList = res;
    });
  }
}

class Order {
  id: number;
  name: string;
  quantity: number

}
