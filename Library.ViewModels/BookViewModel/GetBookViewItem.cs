using Library.ViewModels.AuthorViewModel;
using Library.ViewModels.PublicationHouseViewModel;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.BookViewModel
{
    public class GetBookViewItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public DateTime DateOfPublishing { get; set; }
        [Required]
        public ICollection<GetAuthorViewItem> Authors { get; set; }
        [Required]
        public ICollection<GetPublicationHouseViewItem> PublicationHouses { get; set; }
    }
}