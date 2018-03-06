using Library.DAL.Context;
using Library.Entities.Entities;

namespace Library.DAL.Repositories
{
    public class BrochureRepository<T> : EntityGenericRepository<T> where T : Brochure
    {
        private ApplicationContext _context;

        public BrochureRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}
