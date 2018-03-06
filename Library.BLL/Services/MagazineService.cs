using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels.MagazineViewModel;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class MagazineService
    {
        private MagazineRepository<Magazine> _magazineRepository;

        public MagazineService(ApplicationContext context)
        {
            _magazineRepository = new MagazineRepository<Magazine>(context);
        }
        public GetMagazineViewModel GetAll()
        {
            IEnumerable<Magazine> magazinesList = _magazineRepository.GetAll();
            return Mapper.Map<IEnumerable<Magazine>, GetMagazineViewModel>(magazinesList);
        }

        public void Add(PostMagazineViewModel magazineViewModel)
        {
            _magazineRepository.Add(ToMagazine(magazineViewModel));
        }

        public GetByIdMagazineViewModel GetById(int id)
        {
            Magazine magazine = _magazineRepository.FindById(id);
            return Mapper.Map<Magazine, GetByIdMagazineViewModel>(magazine);
        }

        public void Edit(PostMagazineViewModel magazineViewModel)
        {
            _magazineRepository.Update(ToMagazine(magazineViewModel));
        }
        public void Delete(int id)
        {
            _magazineRepository.Remove(id);
        }

        private Magazine ToMagazine(PostMagazineViewModel magazineViewModel)
        {
            return Mapper.Map<PostMagazineViewModel, Magazine>(magazineViewModel);
        }
    }
}
