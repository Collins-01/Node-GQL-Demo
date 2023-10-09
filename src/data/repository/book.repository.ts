import { CreateBookDTO } from "../../domain";

export default class BookRepository {
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

  createBook = (dto: any) => {
    const newBook = {
      id: String(this.booksData.length + 1),
      ...dto,
    };
    this.booksData.push(newBook);
    return newBook;
    
  };
  getBooks = (amount?: number) => {
    return this.booksData;
  };
  getBookById = (id: number) => {
    const book = this.booksData.find((item: any) => item.id === id);
    if (!book) return null;
    return book;
  };
  deleteBook = (id: number) => {
    const book = this.booksData.find((item: any) => item.id === id);
    if (!book) return null;
    return book.id;
  };
}
