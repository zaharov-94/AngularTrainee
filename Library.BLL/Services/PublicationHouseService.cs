using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels.PublicationHouseViewModel;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class PublicationHouseService
    {
        private PublicationHouseRepository<PublicationHouse> _publicationHouseRepository;

        public PublicationHouseService(ApplicationContext context)
        {
            _publicationHouseRepository = new PublicationHouseRepository<PublicationHouse>(context);
        }

        public GetPublicationHouseViewModel GetAll()
        {
            IEnumerable<PublicationHouse> publicationHouseList = _publicationHouseRepository.GetAll();
            return Mapper.Map<IEnumerable<PublicationHouse>, GetPublicationHouseViewModel>(publicationHouseList);
        }

        public void Add(PostPublicationHouseViewModel publicationHouse)
        {
            _publicationHouseRepository.Add(ToPublicationHouse(publicationHouse));
        }

        public GetByIdPublicationHouseViewModel GetById(int id)
        {
            PublicationHouse publicationHouse = _publicationHouseRepository.FindById(id);
            return Mapper.Map<PublicationHouse, GetByIdPublicationHouseViewModel>(publicationHouse);
        }

        public void Edit(PostPublicationHouseViewModel publicationHouse)
        {
            _publicationHouseRepository.Update(ToPublicationHouse(publicationHouse));
        }
        public void Delete(int id)
        {
            _publicationHouseRepository.Remove(id);
        }

        private PublicationHouse ToPublicationHouse(PostPublicationHouseViewModel publicationHouseViewModel)
        {
            return Mapper.Map<PostPublicationHouseViewModel, PublicationHouse>(publicationHouseViewModel);
        }

    }
}
