import { AuthorEntity } from 'src/author/entity/author.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class BookEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  price: number;
  @ManyToOne(() => AuthorEntity, (author) => author.books)
  @JoinColumn({ name: 'author_id' })
  author: AuthorEntity;
}
