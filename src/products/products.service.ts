import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";

@Injectable()
export class ProductsService{
    private products: Product[] = [];

    insertProduct(title : string, desc : string, price : number): string {
        const prodId = new Date().toString();
        console.log(prodId, title, desc, price)
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string){
        const product = this.products.find((prod) => prod.id === productId);

        if(!product){
            throw new NotFoundException('Could not find product.');
        }

        return {...product};
    }
}