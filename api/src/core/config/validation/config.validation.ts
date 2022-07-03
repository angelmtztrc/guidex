import { plainToClass } from 'class-transformer';
import { IsNumber, validateSync } from 'class-validator';

class EnvironmentVariables {
  @IsNumber()
  PORT: number;
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
