using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModel;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class AuthorService
    {
        private AuthorRepository<Author> _authorRepository;

        public AuthorService(ApplicationContext context)
        {
            _authorRepository = new AuthorRepository<Author>(context);
        }

        public GetAuthorViewModel GetAll()
        {
            IEnumerable<Author> authorList = _authorRepository.GetAll();
            return Mapper.Map<IEnumerable<Author>, GetAuthorViewModel>(authorList);
        }

        public void Add(PostAuthorViewModel author)
        {
            _authorRepository.Add(ToAuthor(author));
        }

        public GetByIdAuthorViewModel GetById(int id)
        {
            Author author = _authorRepository.FindById(id);
            return Mapper.Map<Author, GetByIdAuthorViewModel>(author);
        }

        public void Edit(PostAuthorViewModel author)
        {
            _authorRepository.Update(ToAuthor(author));
        }
        public void Delete(int id)
        {
            _authorRepository.Remove(id);
        }

        private Author ToAuthor(PostAuthorViewModel authorViewModel)
        {
            return Mapper.Map<PostAuthorViewModel, Author>(authorViewModel);
        }

    }
}
