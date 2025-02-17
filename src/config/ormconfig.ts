import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Address } from 'src/address/entities/address.entity';
import { Grocery } from 'src/grocery/entities/grocery.entity';
import { Order } from 'src/order/entities/order.entity';
import { OrderItem } from 'src/order/entities/orderitems.entity';
import { User } from 'src/user/entities/user.entity';

import * as dotenv from 'dotenv';
dotenv.config();

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST, // Read from .env
  port: parseInt(process.env.DB_PORT, 10), // Convert string to number
  username: process.env.DB_USERNAME, // Read from .env
  password: process.env.DB_PASSWORD, // Read from .env
  database: process.env.DB_NAME, // Read from .env
  entities: [User, Order, Grocery, Address, OrderItem],
  synchronize: true, // Set to false in production
};