using Library.DAL.Context;
using Library.Entities.Entities;

namespace Library.DAL.Repositories
{
    public class PublicationHouseRepository<T> : EntityGenericRepository<T> where T : PublicationHouse
    {
        private ApplicationContext _context;

        public PublicationHouseRepository(ApplicationContext context) : base(context)
        {
            _context = context;
        }
    }
}
