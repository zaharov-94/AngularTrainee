using Library.DAL.Context;
using Library.Entities.Entities;

namespace Library.DAL.Repositories
{
    public class BookRepository<T> : EntityGenericRepository<T> where T : Book
    {
        private ApplicationContext _context;

        public BookRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}
