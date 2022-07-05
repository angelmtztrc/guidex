import { Exclude } from 'class-transformer';
import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';

import { BaseEntity } from '@/core/entities/base.entity';

import { Guide } from '@/app/guides/entities/guide.entity';
import { User } from '@/app/users/entities/user.entity';

@Entity()
export class Workspace extends BaseEntity {
  @Column()
  name: string;

  @Column({ nullable: true })
  description?: string;

  @Exclude()
  @OneToMany(() => Guide, (guide) => guide.workspace)
  guides: Guide[];

  @Exclude()
  @ManyToOne(() => User, (user) => user.workspaces)
  author: User;

  constructor(partial: Partial<Workspace>) {
    super();
    Object.assign(this, partial);
  }
}
