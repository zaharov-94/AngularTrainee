using Library.Entities.Entities;
using Library.ViewModels.BookViewModel;
using System.Collections.Generic;

namespace Library.BLL
{
    internal class BookAuthorComparer : IEqualityComparer<BookAuthor>
    {
        public bool Equals(BookAuthor x, BookAuthor y)
        {
            if ((x.BookId == y.BookId) && (x.AuthorId == y.AuthorId))
            {
                return true;
            }
            return false;
        }
        public int GetHashCode(BookAuthor codeh)
        {
            return 0;
        }
    }
}
