import {Component, OnInit} from '@angular/core';
import {ItemServiceService} from '../item-service.service';

@Component({
  selector: 'app-order-update',
  templateUrl: './order-update.component.html',
  styleUrls: ['./order-update.component.css']
})
export class OrderUpdateComponent implements OnInit {
  carBrandInput: string;
  carQuantityInput: number;

  constructor(private itemService: ItemServiceService) {
  }

  ngOnInit() {
    console.log('something');
  }

  onSubmit() {

    console.log('onSubmit');
    this.itemService.updateItem(this.carBrandInput, this.carQuantityInput).subscribe(item => console.log(item));
  }

}

class Order {
  id: number;
  name: string;
  quantity: number;

}
