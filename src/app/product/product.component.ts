import { Component, OnInit } from '@angular/core';
import {products} from '../products'
import {Data} from '../data'
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
products=Data;
selectedProduct = products;
isshow:boolean=false
  constructor() { }

  ngOnInit() {
  }
  deltailProduct(product){
    this.selectedProduct=product;
  }
  removeProduct(product){
   this.products=this.products.filter(item => item.id !=product.id )
  }
  addclass(){
    this.isshow=true
  }
}
