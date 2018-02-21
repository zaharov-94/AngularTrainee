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
    public class MagazineService
    {
        private UnitOfWork _unitOfWork;

        public MagazineService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }
        public IEnumerable<MagazineViewModel> GetAll()
        {
            List<Magazine> magazinesList = _unitOfWork.Magazine.GetAll().ToList();
            Mapper.Reset();
            Mapper.Initialize(cfg => cfg.CreateMap<Magazine, MagazineViewModel>());
            return Mapper.Map<List<Magazine>, IEnumerable<MagazineViewModel>>(magazinesList);
        }

        public void Add(MagazineViewModel magazineViewModel)
        {
            _unitOfWork.Magazine.Add(ToMagazine(magazineViewModel));
        }

        public MagazineViewModel GetById(int id)
        {
            Magazine magazine = _unitOfWork.Magazine.FindById(id);
            Mapper.Reset();
            Mapper.Initialize(cfg => cfg.CreateMap<Magazine, MagazineViewModel>());
            return Mapper.Map<Magazine, MagazineViewModel>(magazine);
        }

        public void Edit(MagazineViewModel magazineViewModel)
        {
            _unitOfWork.Magazine.Update(ToMagazine(magazineViewModel));
        }
        public void Delete(int id)
        {
            _unitOfWork.Magazine.Remove(id);
        }

        private Magazine ToMagazine(MagazineViewModel magazineViewModel)
        {
            Mapper.Reset();
            Mapper.Initialize(cfg => cfg.CreateMap<MagazineViewModel, Magazine>());
            return Mapper.Map<MagazineViewModel, Magazine>(magazineViewModel);
        }
    }
}
