import { Order } from 'src/order/entities/order.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string; 

  @Column({ default: 'user' })
  role: string; // 'admin' or 'user'

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];
}
