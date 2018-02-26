using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Microsoft.EntityFrameworkCore;
using Shared.Enums;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class PublicationService
    {
        private UnitOfWork _unitOfWork;
        private IEnumerable<Publication> _publicationList;

        public PublicationService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }
        
        public IEnumerable<PublicationViewModel> GetAll()
        {
            return Mapper.Map<IEnumerable<Publication>, IEnumerable<PublicationViewModel>>(GetAllPublications());
        }

        private IEnumerable<Publication> GetAllPublications()
        {
            _publicationList = new List<Publication>();
            _publicationList = _unitOfWork.Book.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Book })
                .Concat(_unitOfWork.Brochure.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Brochure }))
                .Concat(_unitOfWork.Magazine.GetAll().Select(x => new Publication { Name = x.Name, Type = PublicationType.Magazine }));
            return _publicationList;
        }
    }
}
