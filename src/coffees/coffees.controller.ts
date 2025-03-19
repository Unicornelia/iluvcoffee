import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { Response } from 'express';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Res() response: Response) {
    response.status(200).send('all the coffees');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `coffee: ${id} found`;
  }

  @Post()
  @HttpCode(HttpStatus.GONE)
  create(@Body() body: any) {
    return body;
  }
}
