import { CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';

@Entity()
export class Follower {
  @PrimaryColumn('uuid')
  follower_id: string;

  @PrimaryColumn('uuid')
  followed_id: string;

  @CreateDateColumn({ name: 'created_at' })
  created_at: Date;
}
