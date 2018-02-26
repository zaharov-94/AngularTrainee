using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class GroupingBookToBookView : Profile
    {
        public GroupingBookToBookView()
        {
            CreateMap<IGrouping<Book, PublicationHouseBook>, BookViewModel>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Book.Id).First()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Select(y => y.Book.Name).First()))
                .ForMember(dest => dest.Author, opt => opt.MapFrom(src => src.Select(y => y.Book.Author).First()))
                .ForMember(dest => dest.YearOfPublishing, opt => opt.MapFrom(src => src.Select(y => y.Book.YearOfPublishing).First()))
                .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.Select(y => y.PublicationHouse)));
        }
    }
}
