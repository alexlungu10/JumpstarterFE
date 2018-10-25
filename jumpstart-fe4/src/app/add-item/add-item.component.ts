import {ItemServiceService} from './../item-service.service';
import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  carBrandInput: string;
  carQuantityInput: number;


  constructor(private itemService: ItemServiceService) {
  }

  ngOnInit() {


  }

  onSubmit() {

    console.log('onSubmit');
    this.itemService.addItem(this.carBrandInput,this.carQuantityInput).subscribe(item => console.log(item));
  }

}
