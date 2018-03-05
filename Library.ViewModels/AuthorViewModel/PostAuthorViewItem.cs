using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.AuthorViewModel
{
    public class PostAuthorViewItem
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string FirstName { get; set; }
        [Required]
        public string LastName { get; set; }
    }
}
