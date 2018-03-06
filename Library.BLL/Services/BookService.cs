using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using Library.ViewModels.BookViewModel;

namespace Library.BLL.Services
{
    public class BookService
    {
        private BookAuthorRepository<BookInAuthor> _bookAuthorRepository;
        private BookRepository<Book> _bookRepository;
        private PublicationHouseBookRepository<PublicationHouseInBook> _publicationHouseBookRepository;

        public BookService(ApplicationContext context)
        {
            _bookAuthorRepository = new BookAuthorRepository<BookInAuthor>(context);
            _bookRepository = new BookRepository<Book>(context);
            _publicationHouseBookRepository = new PublicationHouseBookRepository<PublicationHouseInBook>(context);
        }

        public GetBookViewModel GetAll()
        {
            var publicationHouseBookList = _publicationHouseBookRepository.GetAll();
            var bookAuthorList = _bookAuthorRepository.GetAll();
            var groupedList = publicationHouseBookList.Join(bookAuthorList, x => x.BookId, y => y.BookId, 
                (x,y) => new BookDTO {Book = x.Book, Author = y.Author, PublicationHouse = x.PublicationHouse}).GroupBy(x=>x.Book);

            IEnumerable<GetBookViewItem> bookItems = Mapper.Map<IEnumerable<IGrouping<Book, BookDTO>>, IEnumerable<GetBookViewItem>>(groupedList);
            return Mapper.Map<IEnumerable<GetBookViewItem>, GetBookViewModel>(bookItems);
        }

        public void Add(PostBookViewModel bookViewModel)
        {
            Book book = Mapper.Map<PostBookViewModel, Book>(bookViewModel);
            _bookRepository.Add(book);

            bookViewModel.PostBookViewItem.Id = book.Id;

            var listToAdd = MapToPublicationHouseBook(bookViewModel.PostBookViewItem);
            _publicationHouseBookRepository.Add(listToAdd);

            var listAuthorsToAdd = MapToBookAuthor(bookViewModel.PostBookViewItem);
            _bookAuthorRepository.Add(listAuthorsToAdd);
        }

        public GetByIdBookViewModel GetById(int id)
        {
            GetByIdBookViewModel bookViewModel = Mapper.Map<Book, GetByIdBookViewModel>(_bookRepository.FindById(id));
            return bookViewModel;
        }

        public void Edit(PostBookViewModel bookViewModel)
        {
            Book book = Mapper.Map<PostBookViewItem, Book>(bookViewModel.PostBookViewItem);
            _bookRepository.Update(book);

            var listPublicationHoouseIds = bookViewModel.PostBookViewItem.PublicationHouses.Select(x => x.Id);
            var listToRemove = _publicationHouseBookRepository.Get(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => !listPublicationHoouseIds.Contains(x.PublicationHouseId));
            _publicationHouseBookRepository.Remove(listToRemove);

            var listToAdd = MapToPublicationHouseBook(bookViewModel.PostBookViewItem)
                .Where(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => listPublicationHoouseIds.Contains(x.PublicationHouseId));
            _publicationHouseBookRepository.Add(listToAdd);

            var listAuthorIds = bookViewModel.PostBookViewItem.Authors.Select(x => x.Id);
            var listToRemoveAuthors = _bookAuthorRepository.Get(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => !listAuthorIds.Contains(x.AuthorId));
            _bookAuthorRepository.Remove(listToRemoveAuthors);

            var listToAddAuthors = MapToBookAuthor(bookViewModel.PostBookViewItem)
                .Where(x => x.BookId == bookViewModel.PostBookViewItem.Id)
                .Where(x => listAuthorIds.Contains(x.AuthorId));
            _bookAuthorRepository.Add(listToAddAuthors);
        }

        public void Delete(int id)
        {
            _bookRepository.Remove(id);
        }

        private List<PublicationHouseInBook> MapToPublicationHouseBook(PostBookViewItem bookViewModel)
        {
            var publicationHouseBookList = new List<PublicationHouseInBook>();

            foreach (var item in bookViewModel.PublicationHouses)
            {
                var publicationHouseBook = new PublicationHouseInBook();
                publicationHouseBook.PublicationHouseId = item.Id;
                publicationHouseBook.BookId = bookViewModel.Id;
                publicationHouseBookList.Add(publicationHouseBook);
            }
            return publicationHouseBookList;
        }

        private List<BookInAuthor> MapToBookAuthor(PostBookViewItem bookViewModel)
        {
            var bookAuthors = new List<BookInAuthor>();

            foreach (var item in bookViewModel.Authors)
            {
                var bookAuthor = new BookInAuthor();
                bookAuthor.AuthorId = item.Id;
                bookAuthor.BookId = bookViewModel.Id;
                bookAuthors.Add(bookAuthor);
            }
            return bookAuthors;
        }
    }
}
