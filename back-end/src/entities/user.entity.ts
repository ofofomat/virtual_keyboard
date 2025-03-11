import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  name: string;

  @Column('text', {
    transformer: {
      to: (value: number[][]) => JSON.stringify(value),
      from: (value: string) => JSON.parse(value) as number[][],
    },
  })
  password: number[];
}
