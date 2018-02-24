import { Component } from '@angular/core';
import { ProductService } from './product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [ProductService]
  // styles: [require('./app.component.css'), require('../../node_modules/bootstrap/dist/css/bootstrap.min.css')]
  //styles: ['../node_modules/bootstrap/dist/css/bootstrap.min.css']
//  styleUrls: ['./app.component.css','../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent {

}
