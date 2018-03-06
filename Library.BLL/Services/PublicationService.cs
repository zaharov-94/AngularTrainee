using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels.PublicationViewModel;
using Shared.Enums;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class PublicationService
    {
        private BookRepository<Book> _bookRepository;
        private BrochureRepository<Brochure> _brochureRepository;
        private MagazineRepository<Magazine> _magazineRepository;

        private IEnumerable<Publication> _publicationList;

        public PublicationService(ApplicationContext context)
        {
            _bookRepository = new BookRepository<Book>(context);
            _brochureRepository = new BrochureRepository<Brochure>(context);
            _magazineRepository = new MagazineRepository<Magazine>(context);
        }
        
        public GetPublicationViewModel GetAll()
        {
            return Mapper.Map<IEnumerable<Publication>, GetPublicationViewModel>(GetAllPublications());
        }

        private IEnumerable<Publication> GetAllPublications()
        {
            _publicationList = new List<Publication>();
            _publicationList = _bookRepository.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Book })
                .Concat(_brochureRepository.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Brochure }))
                .Concat(_magazineRepository.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Magazine }));
            return _publicationList;
        }
    }
}
