using Library.DAL.Context;
using Library.Entities.Entities;

namespace Library.DAL.Repositories
{
    public class MagazineRepository<T> : EntityGenericRepository<T> where T : Magazine
    {
        private ApplicationContext _context;

        public MagazineRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}
