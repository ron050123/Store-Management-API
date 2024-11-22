import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StoreModule } from './store/store.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'store_management',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true, // Không dùng trong production
    }),
    StoreModule,
  ],
})
export class AppModule {}
