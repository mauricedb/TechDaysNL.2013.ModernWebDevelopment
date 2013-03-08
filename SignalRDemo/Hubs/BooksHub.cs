using System.Collections.Generic;
using Microsoft.AspNet.SignalR;
using SignalRDemo.Models;

namespace SignalRDemo.Hubs
{
    public class BooksHub : Hub
    {
        private readonly IBooksRepository _repo = new BooksRepository();

        public IEnumerable<Book> GetBooks()
        {
            var books = _repo.GetBooks();
            return books;
        }

        public void UpdateBook(Book book)
        {
            var newBook = _repo.UpdateBook(book);
            Clients.All.bookUpdated(newBook);
        }

        public void AddBook(Book book)
        {
            var newBook = _repo.AddBook(book);
            Clients.All.bookUpdated(newBook);
        }
    }
}