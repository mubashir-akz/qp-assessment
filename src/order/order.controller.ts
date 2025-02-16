import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  create(@Body('groceryIds') groceryIds: number[]) {
    return this.orderService.create(groceryIds);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
