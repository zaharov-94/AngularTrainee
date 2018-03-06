using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class AuthorProfile : Profile
    {
        public AuthorProfile()
        {
            CreateMap<IEnumerable<Author>, GetAuthorViewModel>()
                .ForMember(dest => dest.Authors, x => x.MapFrom(src => src));
            CreateMap<Author, GetByIdAuthorViewModel>()
                .ForMember(dest => dest.GetAuthorViewItem, x => x.MapFrom(src => src));
            CreateMap<PostAuthorViewModel, Author>()
                .ForMember(dest => dest.Id, x => x.MapFrom(src => src.PostAuthorViewItem.Id))
                .ForMember(dest => dest.FirstName, x => x.MapFrom(src => src.PostAuthorViewItem.FirstName))
                .ForMember(dest => dest.LastName, x => x.MapFrom(src => src.PostAuthorViewItem.LastName));
        }
    }
}
