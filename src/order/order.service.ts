import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './entities/order.entity';
import { GroceryService } from 'src/grocery/grocery.service';
import { Grocery } from 'src/grocery/entities/grocery.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private orderRepo: Repository<Order>,
    @InjectRepository(Grocery) private groceryRepo: Repository<Grocery>
  ) { }

  async create(items: { groceryId: number; quantity: number }[], addressId: number, userId: number) {
    const groceryIds = items.map(item => item.groceryId);
    const groceries = await this.groceryRepo.findByIds(groceryIds);

    // const order = new Order();
    // order.address = { id: addressId } as any;
    // order.user = { id: userId } as any;
    // order.status = 'pending';
    // order.items = items.map(item => {
    //   const grocery = groceries.find(grocery => grocery.id === item.groceryId);
    //   return { grocery, quantity: item.quantity } as any;
    // });

  }

  findAll() {
    return this.orderRepo.find({ relations: ['groceries'] });
  }
} 
