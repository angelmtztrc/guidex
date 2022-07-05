import { Column, Entity, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';

import { BaseEntity } from '@/core/entities/base.entity';
import { Workspace } from '@/app/workspaces/entities/workspace.entity';
import { Guide } from '@/app/guides/entities/guide.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Exclude()
  @Column()
  password: string;

  @Exclude()
  @OneToMany(() => Workspace, (workspace) => workspace.author)
  workspaces: Workspace[];

  @Exclude()
  @OneToMany(() => Guide, (guide) => guide.author)
  guides: Guide[];

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
