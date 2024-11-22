import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Freelancer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  @Column()
  password: string;
}
