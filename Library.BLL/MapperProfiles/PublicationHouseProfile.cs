using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.PublicationHouseViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class PublicationHouseProfile : Profile
    {
        public PublicationHouseProfile()
        {
            CreateMap<IEnumerable<PublicationHouse>, GetPublicationHouseViewModel>()
                .ForMember(dest => dest.PublicationHouses, x => x.MapFrom(src => src));
            CreateMap<PublicationHouse, GetByIdPublicationHouseViewModel>()
                .ForMember(dest => dest.GetPublicationHouseViewItem, x => x.MapFrom(src => src));
            CreateMap<PostPublicationHouseViewModel, PublicationHouse>()
                .ForMember(dest => dest.Id, x => x.MapFrom(src => src.PostPublicationHouseViewItem.Id))
                .ForMember(dest => dest.Name, x => x.MapFrom(src => src.PostPublicationHouseViewItem.Name))
                .ForMember(dest => dest.Address, x => x.MapFrom(src => src.PostPublicationHouseViewItem.Address));
        }
    }
}
