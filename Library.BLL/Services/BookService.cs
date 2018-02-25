using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using System.ComponentModel.DataAnnotations;

namespace Library.BLL.Services
{
    public class BookService
    {
        private UnitOfWork _unitOfWork;

        public BookService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }

        public IEnumerable<BookViewModel> GetAllBook()
        {
            IEnumerable<Book> list = _unitOfWork.Book.GetAll().ToList();
            return Mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(list);
        }

        public IEnumerable<PublicationHouseViewModel> GetAllPublicationHouses()
        {
            List<PublicationHouseViewModel> listViewModel = Mapper.Map<IEnumerable<PublicationHouse>, List<PublicationHouseViewModel>>(_unitOfWork.PublicationHouse.GetAll().ToList());
            return listViewModel;
        }

        public void Add(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);
        }

        public BookViewModel GetBookById(int id)
        {
            return Mapper.Map<Book, BookViewModel>(_unitOfWork.Book.FindById(id));
        }

        public void Edit(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);
        }

        public void DeleteBook(int id)
        {
            _unitOfWork.Book.Remove(id);
        }
    }
}
