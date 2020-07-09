import {
    Component,
    Input,
    Output,
    EventEmitter,
    OnChanges,
    SimpleChanges,
    OnInit,
    DoCheck,
    OnDestroy
} from '@angular/core';

import { Product } from '../product.model';

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, DoCheck, OnDestroy {

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    /**
     * First to run.
     * Best place to inyect component dependencies.
     */
    constructor() {
        console.log('1. constructor');
    }

    /**
     * This event is executed every time a value of an input control is changed
     * within a component. It is activated first when the value of a linked
     * property is changed. You always receive a change data map,
     * which contains the current and previous value of the linked property wrapped
     * in a SimpleChange.
     */
    // ngOnChanges(changes: SimpleChanges): void {
    //     console.log('2. ngOnChanges');
    //     console.log(changes);
    // }

    /**
     * It runs once Angular has deployed the data-bound properties or when the
     * component has been initialized, once ngOnChanges has been run. This event
     * is mainly used to initialize the data in the component.
     * Best place to call data services.
     */
    ngOnInit(): void {
        console.log('3. ngOnInit');
    }

    /**
     * It is activated every time the input properties of a component are verified.
     * This method allows us to implement our own custom change detection algorithm
     * or logic for any component.
     * Can't be implemented at the same time as ngOnChanges.
     */
    ngDoCheck(): void {
        console.log('4. ngDoCheck');
    }

    /**
     * This method will be executed just before Angular destroys the components.
     * It is very useful to unsubscribe from observables and disconnect event
     * handlers to avoid memory leaks.
     */
    ngOnDestroy(): void {
        console.log('5. ngOnDestroy');
    }

    addToCart(): void {
        console.log('product added');
        this.productClicked.emit(this.product.id);
    }
}
