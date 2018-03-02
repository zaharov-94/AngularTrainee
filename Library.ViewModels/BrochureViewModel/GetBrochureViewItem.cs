using System.ComponentModel.DataAnnotations;

namespace Library.ViewModels.BrochureViewModel
{
    public class GetBrochureViewItem
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string TypeOfCover { get; set; }
        [Required]
        public int NumberOfPages { get; set; }
    }
}