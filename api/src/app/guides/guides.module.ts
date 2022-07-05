import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Guide } from './entities/guide.entity';
import { GuideRepository } from './repositories/guide.repository';

import { GuidesService } from './guides.service';
import { GuidesController } from './guides.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Guide, GuideRepository])],
  controllers: [GuidesController],
  providers: [GuidesService],
})
export class GuidesModule {}
