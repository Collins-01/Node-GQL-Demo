import { getRepository } from "typeorm";
import { CreateBookDTO } from "../../domain";
import { Book } from "../models";

export default class BookRepository {
  repository = getRepository(Book);
  booksData = [
    {
      id: "1",
      title: "Book 1",
      author: "Author 1",
      genre: "Fiction",
      year: 2020,
    },
    // Add more books here...
  ];

  createBook = async (dto: Partial<Book>): Promise<Book> => {
    // const newBook = {
    //   id: String(this.booksData.length + 1),
    //   ...dto,
    // };
    // this.booksData.push(newBook);
    // return newBook;

    const book = this.repository.create(dto);
    return await this.repository.save(book);
  };
  getBooks = async (amount?: number): Promise<Book[]> => {
    return await this.repository.find();
  };
  getBookById = async (id: number): Promise<Book | null> => {
    return await this.repository.findOne({
      where: {
        id,
      },
    });
  };
  deleteBook = async (id: number) => {
    const book = await this.getBookById(id);

    if (!book) {
      return false; // Book not found
    }

    await this.repository.remove(book);

    return true;
  };

  async updateBook(
    id: number,
    updatedData: Partial<Book>
  ): Promise<Book | null> {
    const book = await this.getBookById(id);

    if (!book) {
      return null; // Book not found
    }

    Object.assign(book, updatedData);

    return await this.repository.save(book);
  }
}
