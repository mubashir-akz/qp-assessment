import { Controller, Post, Get, Body } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private orderService: UserService) {}

}
