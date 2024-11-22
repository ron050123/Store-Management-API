import { Controller, Post, Body } from '@nestjs/common';
import { StoreService } from './store.service';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  // 1. Register Store Owner
  @Post('register-owner')
  async registerOwner(@Body() body) {
    return this.storeService.registerOwner(body);
  }

  // 2. Add Store
  @Post('add-store')
  async addStore(@Body() body) {
    return this.storeService.addStore(body);
  }

  // 3. Register Freelancer
  @Post('register-freelancer')
  async registerFreelancer(@Body() body) {
    return this.storeService.registerFreelancer(body);
  }
}
