import { Column, Entity } from 'typeorm';
import { Exclude } from 'class-transformer';

import { BaseEntity } from '@/core/entities/base.entity';

@Entity()
export class User extends BaseEntity {
  @Column()
  name: string;

  @Column({ unique: true })
  username: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  constructor(partial: Partial<User>) {
    super();
    Object.assign(this, partial);
  }
}
