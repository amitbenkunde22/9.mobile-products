import { style } from "@angular/animations";
import { Component, OnInit } from "@angular/core";


@Component({
    selector : "app-product",
    templateUrl : "./product.component.html",
    styleUrls : ["./product.component.scss"]

    // template : `<p>The Product is PRODUCT_NAME with id PRODUCT_ID</p>`,

    // styles : [
    //     'p{padding: 10px;border: 1px solid skyblue;border-radius: 5px;}'
    // ]

    
})
export class ProductComponent implements OnInit{
    productName : string = "Realme-8";
    productId : number = 1008;
    productStatus !: boolean;
    resp : string = `<p class="alert alert-info">I love Angular</p>`;
    userName : string = "Amit Benkunde";
    

    ngOnInit(): void {
        this.productStatus = (Math.random() > .5) ? true : false
    }
    getBgColor() {
        // if(this.productStatus){
        //     return "orange"
        // }else{
        //     return "#ccc"
        // }
         return this.productStatus ? "orange" : "#ccc"
    }
}



