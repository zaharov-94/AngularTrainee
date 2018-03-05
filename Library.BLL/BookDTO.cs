using Library.Entities.Entities;
using Library.ViewModels.AuthorViewModel;
using Library.ViewModels.PublicationHouseViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.ViewModels.BookViewModel
{
    public class BookDTO
    {
        public Book Book { get; set; }
        public Author Author { get; set; }
        public PublicationHouse PublicationHouse { get; set; }
    }
}
