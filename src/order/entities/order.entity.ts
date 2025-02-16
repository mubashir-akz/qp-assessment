import { Entity, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Grocery } from '../../grocery/entities/grocery.entity';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Grocery)
  @JoinTable()
  groceries: Grocery[];
}
