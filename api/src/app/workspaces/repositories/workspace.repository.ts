import { EntityRepository, Repository } from 'typeorm';

import { Workspace } from '../entities/workspace.entity';

@EntityRepository(Workspace)
export class WorkspaceRepository extends Repository<Workspace> {}
