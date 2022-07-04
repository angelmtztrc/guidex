import { Module } from '@nestjs/common';

import { ConfigModule } from '@/core/config/config.module';

import { GuidesModule } from './guides/guides.module';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ConfigModule, GuidesModule, UsersModule, WorkspacesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
