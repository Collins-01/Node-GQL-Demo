import BookRepository from "../../data/repository/book.repository";
import { CreateBookDTO } from "./dtos";

export class BookService {
  private bookRepository: BookRepository = new BookRepository();

  booksData = () => this.bookRepository.booksData;
  createBook = (dto: any) => this.bookRepository.createBook(dto);
  getBooks = (amount?: number) => this.bookRepository.getBooks(amount);
  getBookById = (id: number) => this.bookRepository.getBookById(id);
  deleteBook = (id: number) => this.bookRepository.deleteBook(id);
}
