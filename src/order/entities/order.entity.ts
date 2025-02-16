import { Entity, PrimaryGeneratedColumn, OneToMany, ManyToOne, Column } from 'typeorm';
import { OrderItem } from './orderitems.entity';
import { User } from '../../user/entities/user.entity';
import { Address } from '../../address/entities/address.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.orders)
  user: User;

  @ManyToOne(() => Address)
  address: Address;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.order, { cascade: true })
  items: OrderItem[];

  @Column()
  status: string;
}
