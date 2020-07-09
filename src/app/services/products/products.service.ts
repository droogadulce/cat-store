import { Injectable } from '@angular/core';

import { Product } from './../../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = [
    {
      id: '1',
      image: 'assets/images/dishes.jpg',
      title: 'Dishes',
      price: 400,
      description: 'Dishes on a wood table and a digestive plant.'
    },
    {
      id: '2',
      image: 'assets/images/massage.jpg',
      title: 'Massager roller',
      price: 120,
      description: 'Plastic massager roller. Cats love it!'
    },
    {
      id: '3',
      image: 'assets/images/shower_cap.jpg',
      title: 'Shower Cap',
      price: 100,
      description: 'Pink shower cap. Perfect for taking long and relaxing baths'
    },
    {
      id: '4',
      image: 'assets/images/sunglasses.jpg',
      title: 'Sunglasses',
      price: 150,
      description: 'Sunbathing has never been so glamorous.'
    },
    {
      id: '5',
      image: 'assets/images/white_textile.jpg',
      title: 'Cat Tunnel',
      price: 500,
      description: 'Pachoncitas walls to take a nap'
    },
    {
      id: '6',
      image: 'assets/images/handkerchief.jpg',
      title: 'Handkerchief',
      price: 80,
      description: 'Red handkerchief. Ready to impress the neighbors.'
    },
  ];

  constructor() { }

  getAllProducts(): Product[] {
    return this.products;
  }

  getProduct(id: string): Product {
    return this.products.find(item => id === item.id);
  }
}
