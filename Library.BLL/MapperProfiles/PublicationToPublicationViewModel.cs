using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.PublicationViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class PublicationToPublicationViewModel : Profile
    {
        public PublicationToPublicationViewModel()
        {
            CreateMap<IEnumerable<Publication>, GetPublicationViewModel>()
                .ForMember(dest => dest.Publications, x => x.MapFrom(src => src));
        }
    }
}
