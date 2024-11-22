import { Controller, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post('register-owner')
  async registerOwner(@Body() body) {
    console.log('Accessing registerOwner method');
    return this.storeService.registerOwner(body);
  }

  @Post('add-store')
  async addStore(@Body() body) {
    console.log('Accessing addStore method');
    return this.storeService.addStore(body);
  }

  @Post('register-freelancer')
  async registerFreelancer(@Body() body) {
    console.log('Accessing registerFreelancer method');
    return this.storeService.registerFreelancer(body);
  }
}
