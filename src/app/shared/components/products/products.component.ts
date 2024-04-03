import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";




@Component({
    selector : "app-products",
    templateUrl : "./products.component.html",
    styleUrls : ["./products.component.scss"]
})
export class ProductsComponent implements OnInit{
    isDisabled : boolean = true;
    productCount : number = 0;
    productAddStatus : string = `No product is added yet`;
    searchProd : string = '';
    @ViewChild("getProduct") getProduct !: ElementRef; 
    constructor(){
        console.log(`Products Constructor is called`)
    }
    ngOnInit(): void {
        setTimeout(()=>{
            this.isDisabled = false
        },2000)
    }

    getProductStatus(){
        console.log(`Product is added !!!`);
        this.productCount++
        this.productAddStatus = `${this.productCount} product are  in cart!!`
    }
    removeProducts(){
        this.productCount--
        if(this.productCount < 1){
            this.productAddStatus = `No Products are added in cart`
        }else{
            this.productAddStatus = `${this.productCount} product are  in cart!!`
        }
        
    }
    onProductSearch(eve:Event){
        // console.log(eve.target.value);
        let val = (eve.target as HTMLInputElement).value
        console.log(val)
        this.searchProd = val;
    }
    onGetProduct(ele : HTMLInputElement){
        console.log(ele.value)
        ele.value = ''
    }
    onGetProduct2(){
        console.log(this.getProduct.nativeElement.value)
        this.getProduct.nativeElement.value = ''
    }
}