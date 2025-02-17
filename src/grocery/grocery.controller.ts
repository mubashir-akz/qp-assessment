import { Controller, Post, Get, Put, Delete, Body, Param } from '@nestjs/common';
import { GroceryService } from './grocery.service';
import { Grocery } from './entities/grocery.entity';

@Controller('grocery')
export class GroceryController {
  constructor(private groceryService: GroceryService) {}

  @Post()
  create(@Body() grocery: Partial<Grocery>) {
    return this.groceryService.create(grocery);
  }

  @Get()
  findAll() {
    return this.groceryService.findAll();
  }

  @Get('/available')
  findAllAvailable() {
    return this.groceryService.findAllAvailable();
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() grocery: Partial<Grocery>) {
    return this.groceryService.update(id, grocery);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.groceryService.remove(id);
  }
}
