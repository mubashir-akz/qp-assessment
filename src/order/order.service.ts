import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { Grocery } from '../grocery/entities/grocery.entity';

@Injectable()
export class OrderService {
  constructor(@InjectRepository(Order) private orderRepo: Repository<Order>) {}

  async create(items: { groceryId: number; quantity: number }[], addressId: number, userId: number) {
    console.log('items', items);
    console.log('addressId', addressId);
    console.log('userId', userId);
  }

  findAll() {
    return this.orderRepo.find({ relations: ['groceries'] });
  }
}
