import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Param,
  Post,
  Query,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';

//@Controller({ host: 'admin.example.com' })
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return this.appService.getHello();
  }

  // test
  @Get(':name')
  getParam(@Param() params: any, @Res() res: Response) {
    const msg = this.appService.getMessage(params.name);

    res.send({ msg });
  }
  // filter/test
  @Get('filter/:name')
  getParamWithFilter(@Param('name') name: string, @Res() res: Response) {
    const msg = this.appService.getMessage(name);
    res.send({ msg });
  }

  // query?nav=test
  @Get('query')
  getRedirected(@Query('nav') nav: string, @Res() res) {
    const msg = this.appService.getMessage(nav);
    res.send({ msg });
  }

  @Post()
  @HttpCode(204)
  postBody(@Body() body: any, @Res() res) {
    const { name } = body;
    console.log(body);
    const msg = this.appService.getMessage(name);
    res.send({ msg });
  }

  @Get('/with-cache')
  @Header('Cache-Control', 'public, max-age=31536000')
  getWithHeader() {
    return this.appService.getMessage('cache');
  }

  @Get('redirect')
  getQuery(@Res() res) {
    res.status(302).redirect('/login');
  }

  @Get('login')
  getLogin() {
    return this.appService.getLogin();
  }
}
