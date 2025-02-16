import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable, ManyToOne } from 'typeorm';
import { Grocery } from '../../grocery/entities/grocery.entity';
import { User } from 'src/user/entities/user.entity';
import { Address } from 'src/address/entities/address.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Grocery)
  @JoinTable()
  groceries: Grocery[];

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Address)
  address: Address;
}
