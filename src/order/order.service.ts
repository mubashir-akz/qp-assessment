import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Grocery } from '../grocery/entities/grocery.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}

  async create(groceryIds: number[]) {
    const order = new Order();
    order.groceries = groceryIds.map(id => ({ id })) as Grocery[];
    return this.orderRepo.save(order);
  }

  findAll() {
    return this.orderRepo.find({ relations: ['groceries'] });
  }
}
