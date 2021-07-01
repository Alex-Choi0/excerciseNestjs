import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Res } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
    @Get()
    findAll(@Res() response){
        // return 'This action returns all coffees';
        response.status(201).send("This action returns all coffees")
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
