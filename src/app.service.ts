import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getMessage(name: string): string {
    return `Hello ${name}`;
  }
  getLogin(): string {
    return 'Login';
  }
}
