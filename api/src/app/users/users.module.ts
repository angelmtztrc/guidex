import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserRepository])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
