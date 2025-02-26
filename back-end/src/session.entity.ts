import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Session {
  @PrimaryColumn()
  id: string; // The unique hash

  @Column('text')
  keyboard_layout: string; // JSON stored as text

  @CreateDateColumn()
  created_at: Date;

  @Column({ default: true })
  is_active: boolean;
}
