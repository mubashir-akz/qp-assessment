import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "./entities/address.entity";
import { Repository } from "typeorm";

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private addressRepo: Repository<Address>
  ) {}

  create(data: Address) {
    return this.addressRepo.save(data);
  }

  findAll() {
    return this.addressRepo.find();
  }
}