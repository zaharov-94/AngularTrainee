using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels;
using Microsoft.EntityFrameworkCore;
using Shared.Enums;
using System;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.Services
{
    public class BrochureService
    {

        private UnitOfWork _unitOfWork;

        public BrochureService(ApplicationContext context)
        {
            _unitOfWork = new UnitOfWork(context);
        }
        public IEnumerable<BrochureViewModel> GetAll()
        {
            List<Brochure> brochuresList = _unitOfWork.Brochure.GetAll().ToList();
            return Mapper.Map<List<Brochure>, IEnumerable<BrochureViewModel>>(brochuresList);
        }

        public void Add(BrochureViewModel brochureViewModel)
        {
            _unitOfWork.Brochure.Add(ToBrochure(brochureViewModel));
        }

        public BrochureViewModel GetById(int id)
        {
            Brochure brochure = _unitOfWork.Brochure.FindById(id);
            return Mapper.Map<Brochure, BrochureViewModel>(brochure);
        }

        public void Edit(BrochureViewModel brochureViewModel)
        {
            _unitOfWork.Brochure.Update(ToBrochure(brochureViewModel));
        }

        public void Delete(int id)
        {
            _unitOfWork.Brochure.Remove(id);
        }
        private Brochure ToBrochure(BrochureViewModel brochureViewModel)
        {
            return Mapper.Map<BrochureViewModel, Brochure>(brochureViewModel);
        }
    }
}
