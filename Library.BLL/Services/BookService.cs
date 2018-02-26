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

            UpateRelations(bookViewModel);
        }

        public BookViewModel GetById(int id)
        {
            return GetAll().Where(x => x.Id == id).Single();
        }

        public void Edit(BookViewModel bookViewModel)
        {
            Book book = Mapper.Map<BookViewModel, Book>(bookViewModel);
            _unitOfWork.Book.Update(book);

            foreach (var item in _unitOfWork.PublicationHouse.GetAll())
            {
                List<PublicationHouseBook> list = new List<PublicationHouseBook>();
                if (bookViewModel.PublicationHouses.Contains(Mapper.Map<PublicationHouse, PublicationHouseViewModel>(item)))
                {
                    PublicationHouseBook ph = new PublicationHouseBook();
                    ph.PublicationHouse = _unitOfWork.PublicationHouse.FindById(item.Id);
                    ph.Book = _unitOfWork.Book.FindById(bookViewModel.Id);
                    ph.Id = 0;
                    list.Add(ph);
                }
            }
        }

        public void Delete(int id)
        {
            _unitOfWork.Book.Remove(id);
        }

        private void UpateRelations(BookViewModel bookViewModel)
        {
            foreach (var item in bookViewModel.PublicationHouses)
            {
                PublicationHouseBook ph = new PublicationHouseBook();
                ph.PublicationHouse = _unitOfWork.PublicationHouse.FindById(item.Id);
                ph.Book = _unitOfWork.Book.GetAll().Last();
                ph.Id = 0;
                _unitOfWork.PublicationHouseBook.Add(ph);
            }
        }

        private void UpdateInstructorCourses(string[] publicationHouses, BookViewModel bookViewModel)
        {
            if (publicationHouses == null)
            {
                bookViewModel.PublicationHouses = new List<PublicationHouseViewModel>();
                return;
            }

            var selectedPhHS = new HashSet<string>(publicationHouses);
            var instructorCourses = new HashSet<int>
                (instructorToUpdate.Courses.Select(c => c.CourseID));
            foreach (var course in db.Courses)
            {
                if (selectedCoursesHS.Contains(course.CourseID.ToString()))
                {
                    if (!instructorCourses.Contains(course.CourseID))
                    {
                        instructorToUpdate.Courses.Add(course);
                    }
                }
                else
                {
                    if (instructorCourses.Contains(course.CourseID))
                    {
                        instructorToUpdate.Courses.Remove(course);
                    }
                }
            }
        }
    }
}
