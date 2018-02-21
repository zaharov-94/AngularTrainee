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
            Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Book, BookViewModel>()
                    .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.PublicationHouseBooks.Select(x => x.PublicationHouse)));
                cfg.CreateMap<PublicationHouse, PublicationHouseViewModel>();
            });
            return Mapper.Map<IEnumerable<Book>, IEnumerable<BookViewModel>>(_unitOfWork.Book.GetAll());
        }
        public IEnumerable<PublicationHouseViewModel> GetAllPublicationHouses()
        {
            Mapper.Initialize(cfg => cfg.CreateMap<PublicationHouse, PublicationHouseViewModel>());
            List<PublicationHouseViewModel> listViewModel = Mapper.Map<IEnumerable<PublicationHouse>, List<PublicationHouseViewModel>>(_unitOfWork.PublicationHouse.GetAll());
            return listViewModel;
        }
        //Непонятно
        public void Add(BookViewModel bookViewModel)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<BookViewModel, Book>());
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Add(book);
            int id = _unitOfWork.Book.Get(x=>x.Id == _unitOfWork.Book.GetAll().Max(t=>t.Id)).Last().Id;
            foreach (var item in bookViewModel.PublicationHouses)
            {
                _unitOfWork.PublicationHouseBook.Add(new PublicationHouseBook { BookId = bookViewModel.Id, PublicationHouseId = item.Id });
            }
        }
        public BookViewModel GetBookById(int id)
        {
            Mapper.Reset();
            Mapper.Initialize(cfg =>
            {
                cfg.CreateMap<Book, BookViewModel>()
                    .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.PublicationHouseBooks.Select(x => x.PublicationHouse)));
                cfg.CreateMap<PublicationHouse, PublicationHouseViewModel>();
            });
            return Mapper.Map<Book, BookViewModel>(_unitOfWork.Book.FindById(id));
        }
        //тоже самое
        public void Edit(BookViewModel bookViewModel)
        {
            Mapper.Initialize(cfg => cfg.CreateMap<BookViewModel, Book>());
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);
            foreach (var item in bookViewModel.PublicationHouses)
            {
                _unitOfWork.PublicationHouseBook.Add(new PublicationHouseBook { BookId = bookViewModel.Id, PublicationHouseId = item.Id });
            }
        }

        public void DeleteBook(int id)
        {
            _unitOfWork.Book.Remove(id);
        }
    }
}
