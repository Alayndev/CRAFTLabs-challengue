import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class TransformTextService {
  constructor(private http: HttpClient) {}

  toUppercase(text: string) {
    console.log("🚀 ~ file: transform-text.service.ts ~ line 12 ~ TransformTextService ~ toUppercase ~ text", text)
    return this.http.get<Product>('https://fakestoreapi.com/products/' + text);
  }
}
