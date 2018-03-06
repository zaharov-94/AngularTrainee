using Library.DAL.Context;
using Library.Entities.Entities;

namespace Library.DAL.Repositories
{
    public class AuthorRepository<T> : EntityGenericRepository<T> where T : Author
    {
        private ApplicationContext _context;

        public AuthorRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}
