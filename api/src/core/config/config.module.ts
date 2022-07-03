import { Module } from '@nestjs/common';
import { ConfigModule as ConfigurationModule } from '@nestjs/config';

import configuration from './configuration';
import { validate } from './validation/config.validation';

@Module({
  imports: [
    ConfigurationModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validate: validate,
      envFilePath: [
        '.env',
        '.env.local',
        '.env.development',
        '.env.production',
      ],
    }),
  ],
  exports: [ConfigurationModule],
})
export class ConfigModule {}
