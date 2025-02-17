import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Grocery } from './entities/grocery.entity';

@Injectable()
export class GroceryService {
  constructor(@InjectRepository(Grocery) private groceryRepo: Repository<Grocery>
) {}

  create(grocery: Partial<Grocery>) {
    return this.groceryRepo.save(grocery);
  }

  async findAll() {
    return this.groceryRepo.createQueryBuilder('grocery').where('grocery.quantity > 0').getMany();
  }

  update(id: number, data: Partial<Grocery>) {
    return this.groceryRepo.update(id, data);
  }

  remove(id: number) {
    return this.groceryRepo.delete(id);
  }

  findAllAvailable() {
    return this.groceryRepo.createQueryBuilder('grocery').where('grocery.quantity > 0').getMany();
  }
}
