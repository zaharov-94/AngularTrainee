using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModel;
using System.Collections.Generic;

namespace Library.BLL.MapperProfiles
{
    public class AuthorToAuthorViewModel : Profile
    {
        public AuthorToAuthorViewModel()
        {
            CreateMap<IEnumerable<Author>, GetAuthorViewModel>()
                .ForMember(dest => dest.Authors, x => x.MapFrom(src => src));
        }
    }
}
