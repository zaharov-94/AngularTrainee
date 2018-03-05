using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels;
using Library.ViewModels.AuthorViewModel;
using Library.ViewModels.BookViewModel;
using Library.ViewModels.PublicationHouseViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class GroupingBookToBookViewModel : Profile
    {
        public GroupingBookToBookViewModel()
        {
            CreateMap<IGrouping<Book, BookDTO>, GetBookViewItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Book.Id).First()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Select(y => y.Book.Name).First()))
                .ForMember(dest => dest.DateOfPublishing, opt => opt.MapFrom(src => src.Select(y => y.Book.DateOfPublishing).First()))
                .ForMember(dest => dest.Authors, opt => opt.MapFrom(src => src.Select(y => y.Author).GroupBy(x=>x.Id)))
                .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.Select(y => y.PublicationHouse).GroupBy(x=>x.Id)));
            CreateMap<IGrouping<int, Author>, GetAuthorViewItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Id).First()))
                .ForMember(dest => dest.FirstName, opt => opt.MapFrom(src => src.Select(y => y.FirstName).First()))
                .ForMember(dest => dest.LastName, opt => opt.MapFrom(src => src.Select(y => y.LastName).First()));
            CreateMap<IGrouping<int, PublicationHouse>, GetPublicationHouseViewItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Id).First()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Select(y => y.Name).First()))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Select(y => y.Address).First()));
        }
    }
}
