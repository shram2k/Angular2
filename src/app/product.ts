export class Product
{
    ProductId:number;
    ProductName:string;
    ProductDesc:string;
    ProductPrice:number;
    constructor(public productId:number, public productName:string, public desc:string, public price:number){
        this.ProductId=productId;
        this.ProductName=productName;
        this.ProductDesc=desc;
        this.ProductPrice=price;
    }

}