using System;
using System.Collections.Generic;
using System.Text;

namespace Library.ViewModels.BookViewModel
{
    public class GetBookViewModel
    {
        public ICollection<GetBookViewItem> Books { get; set; }
    }
}
