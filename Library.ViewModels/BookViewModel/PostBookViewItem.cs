using Library.ViewModels.PublicationHouseViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Library.ViewModels.BookViewModel
{
    public class PostBookViewItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public int YearOfPublishing { get; set; }
        [Required]
        public ICollection<GetPublicationHouseViewItem> PublicationHouses { get; set; }
    }
}
