import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Query() paginationQuery){

        const { limit, offset } = paginationQuery;

        return `This action returns all coffees. Limit : ${limit}, offset: ${offset}`;
    }

    @Get(':id')
    findOne(@Param('id') id:string){
        return `This action returns #${id} coffees`;
    }

    @Post()
    @HttpCode(HttpStatus.ACCEPTED)
    create(@Body() body){
        return body;
        
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() body){
        return `This action returns #${id} coffees`;
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Body() body){
        return `This action removes #${id} coffees`;
    }

}
