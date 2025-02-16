import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './entities/order.entity';
import { OrderItem } from './entities/orderitems.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { Grocery } from '../grocery/entities/grocery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order, OrderItem, Grocery])],
  controllers: [OrderController],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
