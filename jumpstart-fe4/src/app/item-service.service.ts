import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) {
  }


  getItemList() {
    return this.http.get<Order[]>('http://localhost:8081/getItems');
  }


  addItem(carBrandInput: string, carQuantityInput: number) {
    console.log('car brand: ' + carBrandInput + ', quantity: ' + carQuantityInput);
    let body: Order = new Order(null, carBrandInput, carQuantityInput);
    return this.http.post('http://localhost:8081/postItem', body);
  }

  updateItem(carBrandInput: string, carQuantityInput: number) {
    console.log('car brand: ' + carBrandInput + ', quantity: ' + carQuantityInput);
    let body: Order = new Order(4, carBrandInput, carQuantityInput);
    return this.http.put('http://localhost:8081/putItem', body);
  }
}

class Order {
  id: number;
  name: string;
  quantity: number;

  constructor(id, name, quantity) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;

  }

}

