import { Injectable, Param, ParseIntPipe } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Shipwreck Roast',
      brand: 'Buddy Brew',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.coffees.find((coffee) => coffee.id === id);
  }

  create(createCoffeeDto: Coffee) {
    return this.coffees.push(createCoffeeDto);
  }

  update(id: number, updateCoffeeDto: Coffee) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      //
    }
  }

  remove(@Param('id', ParseIntPipe) id: number) {
    const coffeeIndex = this.coffees.findIndex((coffee) => coffee.id === id);
    if (coffeeIndex >= 0) {
      this.coffees.splice(coffeeIndex, 1);
    }
  }
}
