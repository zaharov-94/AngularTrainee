using Library.ViewModels;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL
{
    internal class BookViewModelComparer : IEqualityComparer<BookViewModel>
    {
        public bool Equals(BookViewModel x, BookViewModel y)
        {
            if (x.Id == y.Id)
            {
                return true;
            }
            return false;
        }
        public int GetHashCode(BookViewModel codeh)
        {
            return 0;
        }
    }
}
