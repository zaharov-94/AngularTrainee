using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class BookToBook : Profile
    {
        public BookToBook()
        {
            CreateMap<Book, Book>()
            .ForMember(x=>x.PublicationHouseBooks, p=>p.UseValue(new List<PublicationHouseBook>()));
        }
    }
}
