import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grocery } from './entities/grocery.entity';
import { GroceryService } from './grocery.service';
import { GroceryController } from './grocery.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Grocery])], // Register the Grocery entity
  providers: [GroceryService],
  controllers: [GroceryController],
})
export class GroceryModule {}