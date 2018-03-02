using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.MagazineViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class MagazineToMagazineViewModel : Profile
    {
        public MagazineToMagazineViewModel()
        {
            CreateMap<IEnumerable<Magazine>, GetMagazineViewModel>()
                .ForMember(dest => dest.Magazines, x => x.MapFrom(src => src));
        }
    }
}
