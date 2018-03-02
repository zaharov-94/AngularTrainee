using Library.ViewModels;
using Library.ViewModels.BookViewModel;
using System;
using System.Collections.Generic;
using System.Text;

namespace Library.BLL
{
    internal class BookViewModelComparer : IEqualityComparer<GetBookViewItem>
    {
        public bool Equals(GetBookViewItem x, GetBookViewItem y)
        {
            if (x.Id == y.Id)
            {
                return true;
            }
            return false;
        }
        public int GetHashCode(GetBookViewItem codeh)
        {
            return 0;
        }
    }
}
