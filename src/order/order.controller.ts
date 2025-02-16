import { Controller, Post, Get, Body } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  create(
    @Body() data: { userId: number; items: { groceryId: number; quantity: number }[]; addressId: number }
  ) {
    return this.orderService.create(data.items, data.addressId, data.userId);
  }

  @Get()
  findAll() {
    return this.orderService.findAll();
  }
}
