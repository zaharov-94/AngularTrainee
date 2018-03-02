using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Library.ViewModels.MagazineViewModel;
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
        public GetMagazineViewModel GetAll()
        {
            IEnumerable<Magazine> magazinesList = _unitOfWork.Magazine.GetAll();
            return Mapper.Map<IEnumerable<Magazine>, GetMagazineViewModel>(magazinesList);
        }

        public void Add(PostMagazineViewItem magazineViewModel)
        {
            _unitOfWork.Magazine.Add(ToMagazine(magazineViewModel));
        }

        public GetMagazineViewItem GetById(int id)
        {
            Magazine magazine = _unitOfWork.Magazine.FindById(id);
            return Mapper.Map<Magazine, GetMagazineViewItem>(magazine);
        }

        public void Edit(PostMagazineViewItem magazineViewModel)
        {
            _unitOfWork.Magazine.Update(ToMagazine(magazineViewModel));
        }
        public void Delete(int id)
        {
            _unitOfWork.Magazine.Remove(id);
        }

        private Magazine ToMagazine(PostMagazineViewItem magazineViewModel)
        {
            return Mapper.Map<PostMagazineViewItem, Magazine>(magazineViewModel);
        }
    }
}
