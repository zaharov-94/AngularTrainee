using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.BrochureViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class BrochureToBrochureViewModel:Profile
    {
        public BrochureToBrochureViewModel()
        {
            CreateMap<IEnumerable<Brochure>, GetBrochureViewModel>()
                .ForMember(dest => dest.Brochures, x => x.MapFrom(src => src));
        }
    }
}
