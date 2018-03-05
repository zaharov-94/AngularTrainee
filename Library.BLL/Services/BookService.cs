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
        private UnitOfWork _unitOfWork;
        IEqualityComparer<BookAuthor> _authorComparer;
        IEqualityComparer<PublicationHouseBook> _publicationHouseComparer;

        public BookService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
            _authorComparer = new BookAuthorComparer();
            _publicationHouseComparer = new PublicationHouseBookComparer();
        }

        public GetBookViewModel GetAll()
        {
            var publicationHouseBookList = _unitOfWork.PublicationHouseBook.GetAll();
            var bookAuthorList = _unitOfWork.BookAuthor.GetAll();
            var groupedList = publicationHouseBookList.Join(bookAuthorList, x => x.BookId, y => y.BookId, 
                (x,y) => new BookDTO {Book = x.Book, Author = y.Author, PublicationHouse = x.PublicationHouse}).GroupBy(x=>x.Book);

            IEnumerable<GetBookViewItem> bookItems = Mapper.Map<IEnumerable<IGrouping<Book, BookDTO>>, IEnumerable<GetBookViewItem>>(groupedList);
            return Mapper.Map<IEnumerable<GetBookViewItem>, GetBookViewModel>(bookItems);
        }

        public void Add(PostBookViewItem bookViewModel)
        {
            Book book = Mapper.Map<PostBookViewItem, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);

            bookViewModel.Id = book.Id;

            var listToAdd = ToPublicationHouseBook(bookViewModel);
            _unitOfWork.PublicationHouseBook.Add(listToAdd);

            var listAuthorsToAdd = ToBookAuthor(bookViewModel);
            _unitOfWork.BookAuthor.Add(listAuthorsToAdd);
        }

        public GetBookViewItem GetById(int id)
        {
            GetBookViewItem bookViewModel = Mapper.Map<Book, GetBookViewItem>(_unitOfWork.Book.Get(x => x.Id == id).Single());
            return bookViewModel;
        }

        public void Edit(PostBookViewItem bookViewModel)
        {
            Book book = Mapper.Map<PostBookViewItem, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);
            
            //Remove elements that are not exist in received model (Publication house)
            var listToRemove = _unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id)
                .Except(ToPublicationHouseBook(bookViewModel), _publicationHouseComparer);
            _unitOfWork.PublicationHouseBook.Remove(listToRemove);

            //Add elements that are exist in received model (Publication house)
            var listToAdd = ToPublicationHouseBook(bookViewModel)
                .Except(_unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id), _publicationHouseComparer);
            _unitOfWork.PublicationHouseBook.Add(listToAdd);

            //Remove elements that are not exist in received model (Author)
            var listToRemoveAuthors = _unitOfWork.BookAuthor.Get(x => x.BookId == bookViewModel.Id)
                .Except(ToBookAuthor(bookViewModel), _authorComparer);
            _unitOfWork.BookAuthor.Remove(listToRemoveAuthors);

            //Add elements that are exist in received model (Author)
            var listToAddAuthors = ToBookAuthor(bookViewModel)
                .Except(_unitOfWork.BookAuthor.Get(x => x.BookId == bookViewModel.Id), _authorComparer);
            _unitOfWork.BookAuthor.Add(listToAddAuthors);
        }

        public void Delete(int id)
        {
            _unitOfWork.Book.Remove(id);
        }

        private List<PublicationHouseBook> ToPublicationHouseBook(PostBookViewItem bookViewModel)
        {
            var publicationHouseBook = new List<PublicationHouseBook>();
            foreach (var item in bookViewModel.PublicationHouses)
            {
                PublicationHouseBook ph = new PublicationHouseBook();
                ph.PublicationHouse = _unitOfWork.PublicationHouse.FindById(item.Id);
                ph.Book = _unitOfWork.Book.FindById(bookViewModel.Id);
                ph.PublicationHouseId = ph.PublicationHouse.Id;
                ph.BookId = bookViewModel.Id;
                publicationHouseBook.Add(ph);
            }
            return publicationHouseBook;
        }

        private List<BookAuthor> ToBookAuthor(PostBookViewItem bookViewModel)
        {
            var bookAuthors = new List<BookAuthor>();
            foreach (var item in bookViewModel.Authors)
            {
                BookAuthor ba = new BookAuthor();
                ba.Author = _unitOfWork.Author.FindById(item.Id);
                ba.Book = _unitOfWork.Book.FindById(bookViewModel.Id);
                ba.AuthorId = ba.Author.Id;
                ba.BookId = bookViewModel.Id;
                bookAuthors.Add(ba);
            }
            return bookAuthors;
        }
    }
}
