import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';

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
}
