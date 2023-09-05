import { IsNotEmpty, IsEmail } from 'class-validator';
import { User } from '../interfaces/user.interface';

export class CreateUserDto implements User {
  @IsNotEmpty()
  name: string;

  age: number;

  @IsEmail()
  email: string;
}
