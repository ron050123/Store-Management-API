import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StoreOwner } from './entities/store-owner.entity';
import { Store } from './entities/store.entity';
import { Freelancer } from './entities/freelancer.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(StoreOwner)
    private readonly ownerRepository: Repository<StoreOwner>,
    @InjectRepository(Store)
    private readonly storeRepository: Repository<Store>,
    @InjectRepository(Freelancer)
    private readonly freelancerRepository: Repository<Freelancer>,
  ) {}

  async registerOwner(data: Partial<StoreOwner>) {
    const owner = this.ownerRepository.create(data);
    return this.ownerRepository.save(owner);
  }

  async addStore(data: Partial<Store>) {
    const store = this.storeRepository.create(data);
    return this.storeRepository.save(store);
  }

  async registerFreelancer(data: Partial<Freelancer>) {
    const freelancer = this.freelancerRepository.create(data);
    return this.freelancerRepository.save(freelancer);
  }
}
