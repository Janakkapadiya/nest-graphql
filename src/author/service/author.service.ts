import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorEntity } from '../entity/author.entity';
import { AddAuthorArgs } from '../args/addAuthor.args';
import { Repository } from 'typeorm';
import { UpdateAuthorArgs } from '../args/updateAuthor.args';

@Injectable()
export class AuthorService {
  constructor(
    @InjectRepository(AuthorEntity)
    private readonly authorEntityRepository: Repository<AuthorEntity>,
  ) {}

  async addAuthor(addAuthorArgs: AddAuthorArgs): Promise<string> {
    await this.authorEntityRepository.save(addAuthorArgs);
    return 'author has been added';
  }

  async getAllAuthors(): Promise<AuthorEntity[]> {
    return await this.authorEntityRepository.find();
  }

  async updateAuthor(updateAuthorArgs: UpdateAuthorArgs): Promise<string> {
    const { id, name } = updateAuthorArgs;
    await this.authorEntityRepository.update({ id: id }, { name: name });
    return 'author has been updated';
  }
}
