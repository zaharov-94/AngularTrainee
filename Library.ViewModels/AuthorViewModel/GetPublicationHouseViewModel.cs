using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.AuthorViewModel
{
    public class GetAuthorViewModel
    {
        public ICollection<GetAuthorViewItem> Authors { get; set; }
    }
}
