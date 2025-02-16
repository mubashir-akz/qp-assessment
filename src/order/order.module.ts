import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderController } from './order.controller';
import { OrderService } from './order.service';
import { Order } from './entities/order.entity';
import { Grocery } from 'src/grocery/entities/grocery.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Order,Grocery])], // Register the Grocery entity
  providers: [OrderService],
  controllers: [OrderController],
})
export class OrderModule {}