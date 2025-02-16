import { Body, Controller, Get, Post } from "@nestjs/common";
import { AddressService } from "./address.service";
import { Address } from "./entities/address.entity";

@Controller("address")  
export class AddressController {
    constructor(private addressService: AddressService) {}

    @Post()
    create(
        @Body() data: Address
    ) {
        return this.addressService.create(data);
    }

    @Get()
    findAll() {
        return this.addressService.findAll();
    }
}