using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class BookViewToBook : Profile
    {
        public BookViewToBook()
        {
            CreateMap<BookViewModel, Book>()
                   .ForMember(dest => dest.PublicationHouseBooks, opt => opt.MapFrom(src => src.PublicationHouses));
            CreateMap<PublicationHouseViewModel, PublicationHouseBook>()
                .ForMember(memb => memb.PublicationHouseId, opt => opt.MapFrom(src => src.Id));
        }
    }
}
