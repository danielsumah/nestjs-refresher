import { Controller, Get, HttpCode, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';

@Controller(`api`)
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('say')
  @HttpCode(201)
  postHello(@Req() request: Request): string {
    console.log(request.body);
    return `I am saying hello`;
  }
}
