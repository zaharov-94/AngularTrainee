using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.PublicationViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class PublicationProfile : Profile
    {
        public PublicationProfile()
        {
            CreateMap<IEnumerable<Publication>, GetPublicationViewModel>()
                .ForMember(dest => dest.Publications, x => x.MapFrom(src => src));
        }
    }
}
