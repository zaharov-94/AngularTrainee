using AutoMapper;
using Library.DAL.Context;
using Library.DAL.Repositories;
using Library.Entities.Entities;
using Library.ViewModels.BrochureViewModel;
using System.Collections.Generic;

namespace Library.BLL.Services
{
    public class BrochureService
    {

        private BrochureRepository<Brochure> _brochureRepository;

        public BrochureService(ApplicationContext context)
        {
            _brochureRepository = new BrochureRepository<Brochure>(context);
        }
        public GetBrochureViewModel GetAll()
        {
            IEnumerable<Brochure> brochuresList = _brochureRepository.GetAll();
            return Mapper.Map<IEnumerable<Brochure>, GetBrochureViewModel>(brochuresList);
        }

        public void Add(PostBrochureViewModel brochureViewModel)
        {
            _brochureRepository.Add(ToBrochure(brochureViewModel));
        }

        public GetByIdBrochureViewModel GetById(int id)
        {
            Brochure brochure = _brochureRepository.FindById(id);
            return Mapper.Map<Brochure, GetByIdBrochureViewModel>(brochure);
        }

        public void Edit(PostBrochureViewModel brochureViewModel)
        {
            _brochureRepository.Update(ToBrochure(brochureViewModel));
        }

        public void Delete(int id)
        {
            _brochureRepository.Remove(id);
        }
        private Brochure ToBrochure(PostBrochureViewModel brochureViewModel)
        {
            return Mapper.Map<PostBrochureViewModel, Brochure>(brochureViewModel);
        }
    }
}
