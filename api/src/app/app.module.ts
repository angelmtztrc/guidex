import { Module } from '@nestjs/common';

import { ConfigModule } from '@/core/config/config.module';
import { PostgresModule } from '@/core/database/postgres.module';

import { GuidesModule } from './guides/guides.module';
import { UsersModule } from './users/users.module';
import { WorkspacesModule } from './workspaces/workspaces.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StepsModule } from './steps/steps.module';
import { AuthenticationModule } from './authentication/authentication.module';

@Module({
  imports: [
    ConfigModule,
    PostgresModule,
    GuidesModule,
    UsersModule,
    WorkspacesModule,
    StepsModule,
    AuthenticationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
