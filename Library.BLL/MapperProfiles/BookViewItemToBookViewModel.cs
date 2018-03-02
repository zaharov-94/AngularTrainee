using AutoMapper;
using Library.ViewModels.BookViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Library.BLL.MapperProfiles
{
    public class BookViewItemToBookViewModel:Profile
    {
        public BookViewItemToBookViewModel()
        {
            CreateMap<IEnumerable<GetBookViewItem>, GetBookViewModel>()
                .ForMember(dest => dest.Books, x => x.MapFrom(src => src));
        }
    }
}
