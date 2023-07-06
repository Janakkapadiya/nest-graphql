
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface AddBookArgs {
    title: string;
    price: number;
    authorId: number;
}

export interface UpdateBookArgs {
    id: number;
    title?: Nullable<string>;
    price?: Nullable<number>;
}

export interface AddAuthorArgs {
    name: string;
}

export interface UpdateAuthorArgs {
    id: number;
    name: string;
}

export interface Author {
    id: number;
    name: string;
    books: Book[];
}

export interface Book {
    id: number;
    title: string;
    price?: Nullable<number>;
    author: Author;
}

export interface IQuery {
    getAllBooks(): Book[] | Promise<Book[]>;
    getBookById(id: number): Book | Promise<Book>;
    login(email: string, password: string): string | Promise<string>;
    getAllAuthors(): Author[] | Promise<Author[]>;
}

export interface IMutation {
    addBook(addBookArgs: AddBookArgs): string | Promise<string>;
    deleteBook(id: number): string | Promise<string>;
    updateBook(updateBookArgs: UpdateBookArgs): string | Promise<string>;
    addAuthor(addAuthor: AddAuthorArgs): string | Promise<string>;
    updateAuthor(updateAuthorArgs: UpdateAuthorArgs): string | Promise<string>;
}

type Nullable<T> = T | null;
