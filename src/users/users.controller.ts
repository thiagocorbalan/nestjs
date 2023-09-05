import { UserService } from './users.service';
import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}
  @Post()
  create(@Body() createCatDto: CreateUserDto) {
    return createCatDto;
  }

  @Get()
  findAll() {
    try {
      this.userService.findAll();
    } catch (error) {
      console.log(error);
      throw new HttpException(
        {
          status: HttpStatus.FORBIDDEN,
          error: `This is a custom message ${error}`,
        },
        HttpStatus.FORBIDDEN,
        {
          cause: error,
        },
      );
    }
  }
}
