import { Component, OnInit } from '@angular/core';
import { TransformTextService } from 'src/app/services/transform-text.service';

import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
})
export class SecondComponent implements OnInit {
  text: string = 'default value';
  requestStatus: 'init' | 'loading' | 'success' | 'error' = 'init';

  options = ['1', '2', '3'];

  product: Product = {
    category: '',
    id: 0,
    description: '',
    price: 2,
    image: '',
    title: '',
    rating: {
      rate: 0,
      count: 0,
    },
  };

  constructor(private transformTextService: TransformTextService) {}

  ngOnInit(): void {}

  handleSubmit(event: Event) {
    this.requestStatus = 'loading';
    this.transformTextService.toUppercase(this.text).subscribe(
      (data) => {
        this.requestStatus = 'success';
        this.product = data;
        console.log(data);
      },
      (error) => {
        this.requestStatus = 'error';
        console.error(error);
      }
    );
  }
}
