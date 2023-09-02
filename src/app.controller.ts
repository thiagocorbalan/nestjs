import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('redirect')
  getRedirected(@Res() res) {
    res.status(302).redirect('/login');
  }

  @Get('login')
  getLogin() {
    return this.appService.getLogin();
  }
}
