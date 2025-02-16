import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private groceryRepo: Repository<User>) {}

  create(grocery: Partial<User>) {
    return this.groceryRepo.save(grocery);
  }

  findAll() {
    return this.groceryRepo.find();
  }
}
