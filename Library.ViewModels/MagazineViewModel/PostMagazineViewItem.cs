using System;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.MagazineViewModel
{
    public class PostMagazineViewItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public int Number { get; set; }
        [Required]
        public DateTime DateOfPublishing { get; set; }
    }
}
