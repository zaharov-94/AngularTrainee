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

        public IEnumerable<BookViewModel> GetAll()
        {
            var list = _unitOfWork.PublicationHouseBook.GetAll().GroupBy(x => x.Book);
            return Mapper.Map<IEnumerable<IGrouping<Book, PublicationHouseBook>>, IEnumerable<BookViewModel>>(list);
        }

        public void Add(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);

            foreach(var item in bookViewModel.PublicationHouses)
            {
                PublicationHouseBook ph = new PublicationHouseBook();
                ph.PublicationHouse = _unitOfWork.PublicationHouse.FindById(item.Id);
                ph.Book = _unitOfWork.Book.GetAll().Last();
                ph.Id = 0;
                _unitOfWork.PublicationHouseBook.Add(ph);
            }
        }

        public BookViewModel GetById(int id)
        {
            return GetAll().Where(x => x.Id == id).Single();
        }

        public void Edit(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);
        }

        public void Delete(int id)
        {
            _unitOfWork.Book.Remove(id);
        }
    }
}
