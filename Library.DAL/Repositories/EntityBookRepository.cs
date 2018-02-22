using AutoMapper;
using Library.DAL.Context;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL.Repositories
{
    public class EntityBookRepository<T> : EntityRepository<T> where T : Book
    {
        private ApplicationContext _context;
        private DbSet<T> _dbSet;

        public EntityBookRepository(ApplicationContext context) : base(context)
        {
            _context = context;
            _dbSet = _context.Set<T>();
        }

        public override IEnumerable<T> GetAll()
        {

            try
            {
                IEnumerable<T> item = (IEnumerable<T>)_context.Books.Include(e => e.PublicationHouseBooks).ThenInclude(e => e.PublicationHouse).ToList();
                return item;
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
        public override T FindById(int id)
        {
            try
            {
                return (T)_context.Books.Include(e => e.PublicationHouseBooks).ThenInclude(e => e.PublicationHouse)
                    .Where(e => e.Id == id).FirstOrDefault();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
        //Change it for simplify
        public override void Add(T item)
        {
            try
            {
                Mapper.Reset();
                Mapper.Initialize(cfg => cfg.CreateMap<Book, Book>()
                .ForMember(x=>x.PublicationHouseBooks, p=>p.UseValue(new List<PublicationHouseBook>())));
                Book entity = Mapper.Map<Book, Book>(item);
                _context.Books.Add(entity);
                _context.SaveChanges();

                Book addedBook = _context.Books.Last();
                foreach (var element in item.PublicationHouseBooks)
                {
                    element.Id = 0;
                    element.Book = addedBook;
                    element.BookId = addedBook.Id;
                    element.PublicationHouse = _context.PublicationHouses.Find(element.PublicationHouseId);
                    addedBook.PublicationHouseBooks.Add(element);
                }
                _context.Entry(addedBook).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }
        //Change it for simplify
        public override void Update(T item)
        {
            try
            {
                Book book = _context.Books.Find(item.Id);

                foreach (var prop in item.PublicationHouseBooks)
                {
                    prop.Book = _context.Books.Find(item.Id);
                    prop.PublicationHouse = _context.PublicationHouses.Find(prop.PublicationHouseId);
                    prop.Id = _context.Books.Find(item.Id).PublicationHouseBooks
                        .Where(x => x.PublicationHouseId == prop.PublicationHouseId)
                        .Where(y => y.BookId == prop.BookId).Select(x => x.Id).FirstOrDefault();
                    if (prop.Id == 0)
                    {
                        _context.PublicationHouseBooks.Add(prop);
                        _context.SaveChanges();
                    }
                    prop.Id = _context.PublicationHouseBooks.Last().Id;
                }

                book.Name = item.Name;
                book.Author = item.Author;
                book.YearOfPublishing = item.YearOfPublishing;
                book.PublicationHouseBooks.Clear();
                foreach (var prop in item.PublicationHouseBooks)
                {
                    PublicationHouseBook phb = _context.PublicationHouseBooks.Find(prop.Id);
                    phb.BookId = prop.BookId;
                    phb.Book = prop.Book;
                    phb.PublicationHouseId = prop.PublicationHouseId;
                    phb.PublicationHouse = prop.PublicationHouse;
                    book.PublicationHouseBooks.Add(phb);
                }

                _context.Entry(book).State = EntityState.Modified;
                _context.SaveChanges();
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
            }
        }
    }
}
