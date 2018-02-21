using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels
{
    public class BookViewModel
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Author { get; set; }
        [Required]
        public int YearOfPublishing { get; set; }

        public ICollection<PublicationHouseViewModel> PublicationHouses { get; set; }
    }
}