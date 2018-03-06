using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModel;
using Library.ViewModels.BookViewModel;
using Library.ViewModels.PublicationHouseViewModel;
using System.Collections.Generic;
using System.Linq;

namespace Library.BLL.MapperProfiles
{
    public class BookProfile : Profile
    {
        public BookProfile()
        {
            CreateMap<Book, GetBookViewItem>()
                .ForMember(dest => dest.Authors, x => x.Ignore())
                .ForMember(dest => dest.PublicationHouses, x => x.Ignore());
            CreateMap<IEnumerable<GetBookViewItem>, GetBookViewModel>()
                .ForMember(dest => dest.Books, x => x.MapFrom(src => src));
            CreateMap<IGrouping<Book, BookDTO>, GetBookViewItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Book.Id).First()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Select(y => y.Book.Name).First()))
                .ForMember(dest => dest.DateOfPublishing, opt => opt.MapFrom(src => src.Select(y => y.Book.DateOfPublishing).First()))
                .ForMember(dest => dest.Authors, opt => opt.MapFrom(src => src.Select(y => y.Author).GroupBy(x => x.Id)))
                .ForMember(dest => dest.PublicationHouses, opt => opt.MapFrom(src => src.Select(y => y.PublicationHouse).GroupBy(x => x.Id)));
            CreateMap<IGrouping<int, Author>, GetAuthorViewItem>()
                .ForMember(dest => dest.Id, (IMemberConfigurationExpression<IGrouping<int, Author>, GetAuthorViewItem, int> opt) => opt.MapFrom((IGrouping<int, Author> src) => src.Select(y => y.Id).First()))
                .ForMember(dest => dest.FirstName, (IMemberConfigurationExpression<IGrouping<int, Author>, GetAuthorViewItem, string> opt) => opt.MapFrom((IGrouping<int, Author> src) => src.Select(y => y.FirstName).First()))
                .ForMember(dest => dest.LastName, (IMemberConfigurationExpression<IGrouping<int, Author>, GetAuthorViewItem, string> opt) => opt.MapFrom((IGrouping<int, Author> src) => src.Select(y => y.LastName).First()));
            CreateMap<IGrouping<int, PublicationHouse>, GetPublicationHouseViewItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(src => src.Select(y => y.Id).First()))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(src => src.Select(y => y.Name).First()))
                .ForMember(dest => dest.Address, opt => opt.MapFrom(src => src.Select(y => y.Address).First()));
            CreateMap<Book, GetByIdBookViewModel>()
                .ForMember(dest => dest.GetBookViewItem, x => x.MapFrom(src => src));
            CreateMap<PostBookViewModel, Book>()
                .ForMember(dest => dest.Id, x => x.MapFrom(src => src.PostBookViewItem.Id))
                .ForMember(dest => dest.Name, x => x.MapFrom(src => src.PostBookViewItem.Name))
                .ForMember(dest => dest.DateOfPublishing, x => x.MapFrom(src => src.PostBookViewItem.DateOfPublishing));
        }
    }
}
