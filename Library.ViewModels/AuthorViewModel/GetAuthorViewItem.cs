using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.AuthorViewModel
{
    public class GetAuthorViewItem
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
    }
}
