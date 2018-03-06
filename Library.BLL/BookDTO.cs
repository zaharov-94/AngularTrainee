using Library.Entities.Entities;

namespace Library.ViewModels.BookViewModel
{
    public class BookDTO
    {
        public Book Book { get; set; }
        public Author Author { get; set; }
        public PublicationHouse PublicationHouse { get; set; }
    }
}
