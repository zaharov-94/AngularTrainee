using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.MagazineViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class MagazineProfile : Profile
    {
        public MagazineProfile()
        {
            CreateMap<IEnumerable<Magazine>, GetMagazineViewModel>()
                .ForMember(dest => dest.Magazines, x => x.MapFrom(src => src));
            CreateMap<Magazine, GetByIdMagazineViewModel>()
                .ForMember(dest => dest.GetMagazineViewItem, x => x.MapFrom(src => src));
            CreateMap<PostMagazineViewModel, Magazine>()
                .ForMember(dest => dest.Id, x => x.MapFrom(src => src.PostMagazineViewItem.Id))
                .ForMember(dest => dest.Name, x => x.MapFrom(src => src.PostMagazineViewItem.Name))
                .ForMember(dest => dest.Number, x => x.MapFrom(src => src.PostMagazineViewItem.Number))
                .ForMember(dest => dest.DateOfPublishing, x => x.MapFrom(src => src.PostMagazineViewItem.DateOfPublishing));
        }
    }
}
