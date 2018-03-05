using Library.DAL.Context;
using Library.Entities.Entities;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Library.DAL.Repositories
{
    public class EntityBookAuthorRepository<T> : EntityRepository<T> where T : BookAuthor
    {
        private ApplicationContext _context;

        public EntityBookAuthorRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }

        public override IEnumerable<T> GetAll()
        {

            try
            {
                IEnumerable<T> item = (IEnumerable<T>)_context.BookAuthors.Include(e => e.Book).Include(p => p.Author).ToList();
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
