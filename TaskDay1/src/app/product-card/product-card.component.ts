import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productName: string = 'Test Data';
  productImage: string = 'assets/images/img4.jpg';
  prodImg2: string = 'img4.jpg';
  productDescription: string = 'Beautiful Flowers';
}
