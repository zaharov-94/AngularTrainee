using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.BrochureViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class BrochureProfile:Profile
    {
        public BrochureProfile()
        {
            CreateMap<IEnumerable<Brochure>, GetBrochureViewModel>()
                .ForMember(dest => dest.Brochures, x => x.MapFrom(src => src));
            CreateMap<Brochure, GetByIdBrochureViewModel>()
                .ForMember(dest => dest.GetBrochureViewItem, x => x.MapFrom(src => src));
            CreateMap<PostBrochureViewModel, Brochure>()
                .ForMember(dest => dest.Id, x => x.MapFrom(src => src.PostBrochureViewItem.Id))
                .ForMember(dest => dest.Name, x => x.MapFrom(src => src.PostBrochureViewItem.Name))
                .ForMember(dest => dest.NumberOfPages, x => x.MapFrom(src => src.PostBrochureViewItem.NumberOfPages))
                .ForMember(dest => dest.TypeOfCover, x => x.MapFrom(src => src.PostBrochureViewItem.TypeOfCover));
        }
    }
}
