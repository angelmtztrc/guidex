import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';

import { BaseEntity } from '@/core/entities/base.entity';

import { Workspace } from '@/app/workspaces/entities/workspace.entity';
import { User } from '@/app/users/entities/user.entity';

@Entity()
export class Guide extends BaseEntity {
  @Column()
  title: string;

  @Column()
  description?: string;

  @Column()
  references: string;

  @Column()
  readingTime: number;

  steps: string[];

  @Exclude()
  @ManyToOne(() => Workspace, (workspace) => workspace.guides)
  workspace: Workspace;

  @ManyToOne(() => User, (user) => user.guides)
  author: User;

  constructor(partial: Partial<Guide>) {
    super();
    Object.assign(this, partial);
  }
}
