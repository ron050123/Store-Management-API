import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { StoreOwner } from './entities/store-owner.entity';
import { Store } from './entities/store.entity';
import { Freelancer } from './entities/freelancer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([StoreOwner, Store, Freelancer])],
  controllers: [StoreController],
  providers: [StoreService],
})
export class StoreModule {}
