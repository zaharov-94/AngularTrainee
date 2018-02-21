using Library.DAL.Abstract;
using Library.DAL.Context;
using Library.Entities.Entities;
using Library.Entities.Entities.Identity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;
using System.Threading.Tasks;

namespace Library.DAL.Repositories
{
    public class UnitOfWork : IDisposable
    {
        private readonly ApplicationContext _context;
        private bool _disposed = false;
        private Dictionary<string, object> repositories;
        private IGenericRepository<Magazine> _magazineRepository;
        private IGenericRepository<PublicationHouse> _houseRepository;
        private IGenericRepository<Brochure> _brochureRepository;
        private IGenericRepository<Book> _bookRepository;
        private IGenericRepository<PublicationHouseBook> _publicationHouseBookRepository;

        public IGenericRepository<Magazine> Magazine
        {
            get
            {
                if (_magazineRepository == null)
                    _magazineRepository = this.Repository<Magazine>();
                return _magazineRepository;
            }
        }

        public IGenericRepository<Book> Book
        {
            get
            {
                if (_bookRepository == null)
                    _bookRepository = this.Repository<Book>();
                return _bookRepository;
            }
        }

        public IGenericRepository<Brochure> Brochure
        {
            get
            {
                if (_brochureRepository == null)
                    _brochureRepository = this.Repository<Brochure>();
                return _brochureRepository;
            }
        }

        public IGenericRepository<PublicationHouse> PublicationHouse
        {
            get
            {
                if (_houseRepository == null)
                    _houseRepository = this.Repository<PublicationHouse>();
                return _houseRepository;
            }
        }
        public IGenericRepository<PublicationHouseBook> PublicationHouseBook
        {
            get
            {
                if (_publicationHouseBookRepository == null)
                    _publicationHouseBookRepository = this.Repository<PublicationHouseBook>();
                return _publicationHouseBookRepository;
            }
        }
        public UnitOfWork(ApplicationContext context)
        {
            _context = context;
        }

        public void Dispose()
        {
            Dispose(true);
            GC.SuppressFinalize(this);
        }

        public void Save()
        {
            _context.SaveChanges();
        }

        public async Task SaveAsync()
        {
            await _context.SaveChangesAsync();
        }

        public virtual void Dispose(bool disposing)
        {
            if (!_disposed)
            {
                if (disposing)
                {
                    _context.Dispose();
                }
            }
            _disposed = true;
        }

        public IGenericRepository<T> Repository<T>() where T : TEntity
        {
            if (repositories == null)
            {
                repositories = new Dictionary<string, object>();
            }

            var type = typeof(T).Name;

            if (!repositories.ContainsKey(type))
            {
                var repositoryType = typeof(EntityRepository<>);
                if (typeof(T) == typeof(Book))
                {
                    repositoryType = typeof(EntityBookRepository<>);
                }
                var repositoryInstance = Activator.CreateInstance(repositoryType.MakeGenericType(typeof(T)), _context);
                repositories.Add(type, repositoryInstance);
            }
            return (IGenericRepository<T>)repositories[type];
        }
    }
}
