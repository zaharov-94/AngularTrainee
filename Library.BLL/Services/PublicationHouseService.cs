using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Library.ViewModels.PublicationHouseViewModel;
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

        public GetPublicationHouseViewModel GetAll()
        {
            IEnumerable<PublicationHouse> publicationHouseList = _unitOfWork.PublicationHouse.GetAll();
            return Mapper.Map<IEnumerable<PublicationHouse>, GetPublicationHouseViewModel>(publicationHouseList);
        }

        public void Add(PostPublicationHouseViewItem publicationHouse)
        {
            _unitOfWork.PublicationHouse.Add(ToPublicationHouse(publicationHouse));
        }

        public GetPublicationHouseViewItem GetById(int id)
        {
            PublicationHouse publicationHouse = _unitOfWork.PublicationHouse.FindById(id);
            return Mapper.Map<PublicationHouse, GetPublicationHouseViewItem>(publicationHouse);
        }

        public void Edit(PostPublicationHouseViewItem publicationHouse)
        {
            _unitOfWork.PublicationHouse.Update(ToPublicationHouse(publicationHouse));
        }
        public void Delete(int id)
        {
            _unitOfWork.PublicationHouse.Remove(id);
        }

        private PublicationHouse ToPublicationHouse(PostPublicationHouseViewItem publicationHouseViewModel)
        {
            return Mapper.Map<PostPublicationHouseViewItem, PublicationHouse>(publicationHouseViewModel);
        }

    }
}
