import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryColumn()
  id: string;

  @Column({type: 'text'})
  username: string;

  @Column({ type: 'text', unique: true })
  keyboard_hash: string;

  @CreateDateColumn()
  created_at: Date;

  @Column({ default: true })
  is_active: boolean;
}
