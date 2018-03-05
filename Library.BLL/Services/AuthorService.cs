using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Library.ViewModels.AuthorViewModel;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class AuthorService
    {
        private UnitOfWork _unitOfWork;

        public AuthorService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }

        public GetAuthorViewModel GetAll()
        {
            IEnumerable<Author> authorList = _unitOfWork.Author.GetAll();
            return Mapper.Map<IEnumerable<Author>, GetAuthorViewModel>(authorList);
        }

        public void Add(PostAuthorViewItem author)
        {
            _unitOfWork.Author.Add(ToAuthor(author));
        }

        public GetAuthorViewItem GetById(int id)
        {
            Author author = _unitOfWork.Author.FindById(id);
            return Mapper.Map<Author, GetAuthorViewItem>(author);
        }

        public void Edit(PostAuthorViewItem author)
        {
            _unitOfWork.Author.Update(ToAuthor(author));
        }
        public void Delete(int id)
        {
            _unitOfWork.Author.Remove(id);
        }

        private Author ToAuthor(PostAuthorViewItem authorViewModel)
        {
            return Mapper.Map<PostAuthorViewItem, Author>(authorViewModel);
        }

    }
}
