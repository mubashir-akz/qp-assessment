import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { Order } from './entities/order.entity';
import { Grocery } from 'src/grocery/entities/grocery.entity';
import { User } from 'src/user/entities/user.entity';
import { Address } from 'src/address/entities/address.entity';

interface OrderItem {
  groceryId: number;
  quantity: number;
}

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order) private readonly orderRepo: Repository<Order>,
    @InjectRepository(Grocery) private readonly groceryRepo: Repository<Grocery>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Address) private readonly addressRepo: Repository<Address>
  ) {}

  /**
   * Create a new order.
   */
  async create(items: OrderItem[], addressId: number, userId: number): Promise<Order> {
    if (items.length === 0) {
      throw new BadRequestException('Order must contain at least one grocery item.');
    }

    // Fetch groceries
    const groceryIds = items.map(item => item.groceryId);
    const groceries = await this.groceryRepo.find({ where: { id: In(groceryIds) } });

    if (groceries.length !== groceryIds.length) {
      throw new NotFoundException('One or more grocery items not found.');
    }

    // Check stock availability
    for (const item of items) {
      const grocery = groceries.find(g => g.id === item.groceryId);
      if (!grocery || grocery.quantity < item.quantity) {
        throw new BadRequestException(`Insufficient stock for grocery item ID ${item.groceryId}`);
      }
    }

    // Fetch user and address
    const user = await this.userRepo.findOne({ where: { id: userId || 0 } });
    const address = await this.addressRepo.findOne({ where: { id: addressId || 0 } });

    if (!user || !address) {
      throw new NotFoundException('User or Address not found.');
    }

    // Create the order
    const order = this.orderRepo.create({
      user,
      address,
      status: 'pending',
      items: items.map(item => ({
        grocery: groceries.find(g => g.id === item.groceryId),
        quantity: item.quantity
      }))
    });

    // Save the order
    const savedOrder = await this.orderRepo.save(order);

    // Update grocery stock
    await Promise.all(
      items.map(item => {
        const grocery = groceries.find(g => g.id === item.groceryId);
        return this.groceryRepo.update(grocery.id, { quantity: grocery.quantity - item.quantity });
      })
    );

    return savedOrder;
  }

  /**
   * Fetch all orders with related details.
   */
  async findAll(): Promise<Order[]> {
    return this.orderRepo.find({
      relations: ['user', 'address', 'items', 'items.grocery']
    });
  }
}
