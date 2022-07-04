import { plainToClass } from 'class-transformer';
import { IsNumber, IsString, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  PORT: number;

  @IsNumber()
  DATABASE_PORT: number;

  @IsString()
  DATABASE_HOST: string;

  @IsString()
  DATABASE_NAME: string;

  @IsString()
  DATABASE_USERNAME: string;

  @IsString()
  DATABASE_PASSWORD: string;
}

export const validate = (config: Record<string, unknown>) => {
  const configuration = plainToClass(EnvironmentVariables, config, {
    enableImplicitConversion: true,
  });

  const errors = validateSync(configuration, { skipMissingProperties: false });

  if (errors.length > 0)
    throw new Error(`Configuration validation failed: ${errors.toString()}`);

  return configuration;
};
