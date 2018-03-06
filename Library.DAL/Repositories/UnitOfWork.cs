using Library.DAL.Abstract;
using Library.DAL.Context;
using Library.Entities.Entities;
using System;

namespace Library.DAL.Repositories
{
    public class UnitOfWork : IDisposable
    {
        private readonly ApplicationContext _context;
        private bool _disposed = false;
        private IGenericRepository<Magazine> _magazineRepository;
        private IGenericRepository<Author> _authorRepository;
        private IGenericRepository<PublicationHouse> _houseRepository;
        private IGenericRepository<Brochure> _brochureRepository;
        private IGenericRepository<Book> _bookRepository;
        private IGenericRepository<PublicationHouseBook> _publicationHouseBookRepository;
        private IGenericRepository<BookAuthor> _bookAuthorRepository;

        public IGenericRepository<Magazine> Magazine
        {
            get
            {
                if (_magazineRepository == null)
                    _magazineRepository = new MagazineRepository<Magazine>(_context);
                return _magazineRepository;
            }
        }

        public IGenericRepository<Book> Book
        {
            get
            {
                if (_bookRepository == null)
                    _bookRepository = new BookRepository<Book>(_context);
                return _bookRepository;
            }
        }

        public IGenericRepository<Author> Author
        {
            get
            {
                if (_authorRepository == null)
                    _authorRepository = new AuthorRepository<Author>(_context);
                return _authorRepository;
            }
        }

        public IGenericRepository<Brochure> Brochure
        {
            get
            {
                if (_brochureRepository == null)
                    _brochureRepository = new BrochureRepository<Brochure>(_context);
                return _brochureRepository;
            }
        }

        public IGenericRepository<PublicationHouse> PublicationHouse
        {
            get
            {
                if (_houseRepository == null)
                    _houseRepository = new PublicationHouseRepository<PublicationHouse>(_context);
                return _houseRepository;
            }
        }

        public IGenericRepository<PublicationHouseBook> PublicationHouseBook
        {
            get
            {
                if (_publicationHouseBookRepository == null)
                    _publicationHouseBookRepository = new PublicationHouseBookRepository<PublicationHouseBook>(_context);
                return _publicationHouseBookRepository;
            }
        }

        public IGenericRepository<BookAuthor> BookAuthor
        {
            get
            {
                if (_bookAuthorRepository == null)
                    _bookAuthorRepository = new BookAuthorRepository<BookAuthor>(_context);
                return _bookAuthorRepository;
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
    }
}
