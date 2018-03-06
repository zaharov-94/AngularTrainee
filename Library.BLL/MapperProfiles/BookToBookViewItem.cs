using AutoMapper;
using Library.Entities.Entities;
using Library.ViewModels.BookViewModel;

namespace Library.BLL.MapperProfiles
{
    public class BookToBookViewItem : Profile
    {
        public BookToBookViewItem()
        {
            CreateMap<Book, GetBookViewItem>()
                .ForMember(dest => dest.Authors, x => x.Ignore())
                .ForMember(dest => dest.PublicationHouses, x => x.Ignore());
        }
    }
}
