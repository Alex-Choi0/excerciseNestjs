import { Injectable, NotFoundException } from "@nestjs/common";
import { Product } from "./product.module";

@Injectable()
export class ProductsService{
    private products: Product[] = [];

    insertProduct(title : string, desc : string, price : number): string {
        // const prodId = new Date().toString();
        const prodId = Math.random().toString();
        console.log(prodId, title, desc, price)
        const newProduct = new Product(prodId, title, desc, price);
        this.products.push(newProduct);
        return prodId;
    }

    getProducts(){
        return [...this.products];
    }

    getSingleProduct(productId: string){
        console.log("productId : ", productId);
        const product = this.findProduct(productId).product;
        return {...product};
    }

    updateProduct(
        productId : string,
        title : string,
        desc : string,
        price : number
        ){
            const {product, productIndex} = this.findProduct(productId);
            // const product = productObject.product;
            // const index = productObject.productIndex;

            const updateProduct = {...product};

            if(title){
                updateProduct.title = title;
            }

            if(desc){
                updateProduct.desc = desc;
            }

            if(price){
                updateProduct.price = price;
            }

            this.products[productIndex] = updateProduct;
        }


    deleteProduct(productId: string){
        console.log("deleteProduct : ", productId);
        // const prodId = this.findProduct(productId).product.id;
        // console.log("prodId : ",typeof prodId, prodId);
        
        // this.products = this.products.filter((ele) => {
        //     console.log('filter', ele.id, prodId);
        //     console.log("filter boolean : ", ele.id === prodId )
        //     return ele.id !== prodId.toString();
        // });

        const prodId = this.findProduct(productId).productIndex;
        this.products.splice(prodId, 1);

        return null;
    }
    
    private findProduct(id : string){

        console.log('findProduct ID : ', id);

        // 해당 id를 갖는 상품이 있는지 확인한다.
        const productIndex = this.products.findIndex((prod) => prod.id === id);
        console.log("productIndex : ", productIndex);
        if(productIndex < 0){
            console.log("no product");
            throw new NotFoundException('Could not find product.');
        }

        const product = this.products[productIndex];

        return {product, productIndex};
    }


}

