import {Component} from '@angular/core'
import {Product} from './product'

@Component({

    selector:'app-product-list',
    templateUrl:'./app.products.html'
})

export class ProductComponent
{
    title:'Products List';
    productList:Product[];
    constructor()
    {
        this.productList=[
            new Product(1,'Product 1','House Hold', 45.50),
            new Product(2,'Product 2','Office Use', 5.50),
            new Product(3,'Product 3','House hold', 12),
            new Product(3,'Product 4','Beauty Care', 3.10)
        ]
    }
    
}