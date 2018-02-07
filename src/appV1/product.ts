export class Product
{
    ProductId:number;
    ProductName:string;
    ProductDesc:string;
    ProductPrice:number;
    ProductImage:string;
    
    constructor(public productId:number, public productName:string, public desc:string, public price:number, public image:string){
        this.ProductId=productId;
        this.ProductName=productName;
        this.ProductDesc=desc;
        this.ProductPrice=price;
        this.ProductImage=image;
    }

}