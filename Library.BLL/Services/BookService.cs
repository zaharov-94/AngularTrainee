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
using Library.ViewModels.BookViewModel;

namespace Library.BLL.Services
{
    public class BookService
    {
        private UnitOfWork _unitOfWork;
        IEqualityComparer<GetBookViewItem> _bookComparer;
        IEqualityComparer<PublicationHouseBook> _publicationHouseComparer;

        public BookService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
            _bookComparer = new BookViewModelComparer();
            _publicationHouseComparer = new PublicationHouseBookComparer();
        }

        public GetBookViewModel GetAll()
        {
            var list = _unitOfWork.PublicationHouseBook.GetAll().GroupBy(x => x.Book);
            IEnumerable<GetBookViewItem> books = Mapper.Map<IEnumerable<IGrouping<Book, PublicationHouseBook>>, IEnumerable<GetBookViewItem>>(list);
            IEnumerable<GetBookViewItem> booksWithoutPublisher = Mapper.Map<IEnumerable<Book>, IEnumerable<GetBookViewItem>>(_unitOfWork.Book.GetAll());

            books = books.Concat(booksWithoutPublisher.Except(books, _bookComparer));
            return Mapper.Map<IEnumerable<GetBookViewItem>, GetBookViewModel>(books);
        }

        public void Add(PostBookViewItem bookViewModel)
        {
            Book book = Mapper.Map<PostBookViewItem, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);

            bookViewModel.Id = book.Id;

            var listToAdd = ToPublicationHouseBook(bookViewModel);
            foreach (var item in listToAdd)
            {
                _unitOfWork.PublicationHouseBook.Add(item);
            }
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
            
            //Remove elements that are not exist in received model
            var listToRemove = _unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id)
                .Except(ToPublicationHouseBook(bookViewModel), _publicationHouseComparer);
            _unitOfWork.PublicationHouseBook.Remove(listToRemove);

            //Add elements that are exist in received model
            var listToAdd = ToPublicationHouseBook(bookViewModel)
                .Except(_unitOfWork.PublicationHouseBook.Get(x => x.BookId == bookViewModel.Id), _publicationHouseComparer);
            _unitOfWork.PublicationHouseBook.Add(listToAdd);
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
    }
}
