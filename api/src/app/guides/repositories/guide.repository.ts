import { EntityRepository, Repository } from 'typeorm';

import { Guide } from '../entities/guide.entity';

@EntityRepository(Guide)
export class GuideRepository extends Repository<Guide> {}
