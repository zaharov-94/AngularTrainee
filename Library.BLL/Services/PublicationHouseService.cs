using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class PublicationHouseService
    {
        private UnitOfWork _unitOfWork;

        public PublicationHouseService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }

        public IEnumerable<PublicationHouseViewModel> GetAll()
        {
            IEnumerable<PublicationHouse> publicationHouseList = _unitOfWork.PublicationHouse.GetAll();
            return Mapper.Map<IEnumerable<PublicationHouse>, IEnumerable<PublicationHouseViewModel>>(publicationHouseList);
        }

        public void Add(PublicationHouseViewModel publicationHouse)
        {
            _unitOfWork.PublicationHouse.Add(ToPublicationHouse(publicationHouse));
        }

        public PublicationHouseViewModel GetById(int id)
        {
            PublicationHouse publicationHouse = _unitOfWork.PublicationHouse.FindById(id);
            return Mapper.Map<PublicationHouse, PublicationHouseViewModel>(publicationHouse);
        }

        public void Edit(PublicationHouseViewModel publicationHouse)
        {
            _unitOfWork.PublicationHouse.Update(ToPublicationHouse(publicationHouse));
        }
        public void Delete(int id)
        {
            _unitOfWork.PublicationHouse.Remove(id);
        }

        private PublicationHouse ToPublicationHouse(PublicationHouseViewModel publicationHouseViewModel)
        {
            return Mapper.Map<PublicationHouseViewModel, PublicationHouse>(publicationHouseViewModel);
        }

    }
}
