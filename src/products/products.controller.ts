import { Controller, Post, Body, Get, Param, Patch, Delete } from '@nestjs/common';
import { stringify } from 'querystring';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {

    }

    // 모든 상품의 정보를 받는다.
    @Get()
    getAllProducts(){
        return {product : this.productsService.getProducts()};
    }
 
    // 주소지에 있는 id의 상품을 찾는다.
    @Get(':id')
    getProduct(@Param('id') prodId: string){
        return this.productsService.getSingleProduct(prodId);
    }

    // 상품을 추가한다.
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

    // 존재하는 상품을 수정한다.
    @Patch(':id')
    updateProduct(
        @Param('id') prodId : string,
        @Body('title') prodTitle : string,
        @Body('description') prodDesc : string,
        @Body('price') prodPrice : number
    ){
        
        this.productsService.updateProduct(prodId,prodTitle,prodDesc,prodPrice);
        return null;
    }

    // 존재하는 상품을 삭제한다.
    @Delete(':id')
    deleteProduct(@Param('id') prodId : string){
        this.productsService.deleteProduct(prodId);
        return "delete";
    }



}