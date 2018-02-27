using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.ComponentModel.DataAnnotations;
using System;

namespace Library.BLL.Services
{
    public class BookService
    {
        private UnitOfWork _unitOfWork;
        IEqualityComparer<BookViewModel> _bookComparer;
        IEqualityComparer<PublicationHouseBook> _publicationHouseComparer;

        public BookService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
            _bookComparer = new BookViewModelComparer();
            _publicationHouseComparer = new PublicationHouseBookComparer();
        }

        public IEnumerable<BookViewModel> GetAll()
        {
            var list = _unitOfWork.PublicationHouseBook.GetAll().GroupBy(x => x.Book);
            IEnumerable<BookViewModel> books = Mapper.Map<IEnumerable<IGrouping<Book, PublicationHouseBook>>, IEnumerable<BookViewModel>>(list);
            IEnumerable<BookViewModel> booksWithoutPublisher = Mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(_unitOfWork.Book.GetAll());

            books = books.Concat(booksWithoutPublisher.Except(books, _bookComparer));
            return books;
        }

        public void Add(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);

            bookViewModel.Id = book.Id;
            AddRelationItems(bookViewModel);
        }

        public BookViewModel GetById(int id)
        {
            BookViewModel bookViewModel = Mapper.Map<Book, BookViewModel>(_unitOfWork.Book.Get(x => x.Id == id).Single());
            return bookViewModel;
        }

        public void Edit(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);

            var listToRemove = _unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id).Except(ToPublicationHouseBook(bookViewModel), _publicationHouseComparer).Select(x=>x.Id);
            foreach (var item in listToRemove)
            {
                _unitOfWork.PublicationHouseBook.Remove(item);
            }
            var listToAdd = ToPublicationHouseBook(bookViewModel).Except(_unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id), _publicationHouseComparer);
            foreach (var item in listToAdd)
            {
                _unitOfWork.PublicationHouseBook.Add(item);
            }
            //var listToRemove = _unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id).Select(x=>x.Id);

            //foreach(var item in listToRemove)
            //{
            //    _unitOfWork.PublicationHouseBook.Remove(item);
            //}

            //AddRelationItems(bookViewModel);
        }

        public void Delete(int id)
        {
            _unitOfWork.Book.Remove(id);
        }

        private List<PublicationHouseBook> ToPublicationHouseBook(BookViewModel bookViewModel)
        {
            var publicationHouseBook = new List<PublicationHouseBook>();
            foreach (var item in bookViewModel.PublicationHouses)
            {
                PublicationHouseBook ph = new PublicationHouseBook();
                ph.PublicationHouse = _unitOfWork.PublicationHouse.FindById(item.Id);
                ph.Book = _unitOfWork.Book.FindById(bookViewModel.Id);
                ph.PublicationHouseId = ph.PublicationHouse.Id;
                ph.BookId = bookViewModel.Id;
                //ph.Id = 0;
                publicationHouseBook.Add(ph);
                //_unitOfWork.PublicationHouseBook.Add(ph);
            }
            return publicationHouseBook;
        }

    }
}
