import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {

    }

    @Get()
    getAllProducts(){
        return {product : this.productsService.getProducts()};
    }
 
    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    @Post()
    addProduct(
        // 전체의 Body를 받기위해서 아래 주석을 사용할수 있음
        // @Body() completeBody: { title : string, 
        //     description : string, 
        //     price : number}
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
        ) {
         const generatedId = this.productsService.insertProduct(prodTitle, prodDesc, prodPrice);
         return {
             id : generatedId
         };

    }

}