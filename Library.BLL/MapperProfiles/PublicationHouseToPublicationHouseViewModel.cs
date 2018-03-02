using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.PublicationHouseViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class PublicationHouseToPublicationHouseViewModel : Profile
    {
        public PublicationHouseToPublicationHouseViewModel()
        {
            CreateMap<IEnumerable<PublicationHouse>, GetPublicationHouseViewModel>()
                .ForMember(dest => dest.PublicationHouses, x => x.MapFrom(src => src));
        }
    }
}
