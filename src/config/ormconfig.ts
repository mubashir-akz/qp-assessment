import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Grocery } from 'src/grocery/entities/grocery.entity';
import { Order } from 'src/order/entities/order.entity';
import { User } from 'src/user/entities/user.entity';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5431,
  username: 'postgres',
  password: '1234',
  database: 'qp-assessment',
  entities: [User,Order,Grocery],
  synchronize: true,
};