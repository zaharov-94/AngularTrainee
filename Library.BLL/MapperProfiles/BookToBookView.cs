using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class BookToBookView : Profile
    {
        public BookToBookView()
        {
            CreateMap<Book, BookViewModel>()
                    .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.PublicationHouseBooks.Select(x => x.PublicationHouse)));
            CreateMap<PublicationHouse, PublicationHouseViewModel>();
        }
    }
}
