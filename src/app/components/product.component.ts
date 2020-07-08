import { Component } from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {

    product: Product = {
        id: '1',
        image: 'assets/images/dishes.jpg',
        title: 'Dishes',
        price: 400,
        description: 'Dishes on a wood table and a digestive plant.'
    };
}
