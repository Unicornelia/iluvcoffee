import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
  constructor(private readonly coffeesService: CoffeesService) {}

  @Get()
  findAll(@Query() paginationQuery) {
    // const {limit, offset} = paginationQuery;
    return this.coffeesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.coffeesService.findOne(id);
  }

  @Post()
  create(@Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.coffeesService.create(body);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() body: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return this.coffeesService.update(id, body);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    this.coffeesService.remove(id);
  }
}
