using AutoMapper;
using Library.DAL.Context;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL.Repositories
{
    public class EntityBookRepository<T> : EntityRepository<T> where T : PublicationHouseBook
    {
        private ApplicationContext _context;

        public EntityBookRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }

        public override IEnumerable<T> GetAll()
        {

            try
            {
                IEnumerable<T> item = (IEnumerable<T>)_context.PublicationHouseBooks.Include(e => e.Book).Include(p => p.PublicationHouse).ToList();
                return item;
            }
            catch (Exception ex)
            {
                LogRegistrator.Write(ex);
                return null;
            }
        }
    }
}
