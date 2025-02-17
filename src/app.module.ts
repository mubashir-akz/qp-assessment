import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/ormconfig';
import { OrderModule } from './order/order.module';
import { GroceryModule } from './grocery/grocery.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load .env file
    TypeOrmModule.forRoot(typeOrmConfig),
    OrderModule,
    GroceryModule,
    UserModule,
    AddressModule
  ]
})
export class AppModule {}