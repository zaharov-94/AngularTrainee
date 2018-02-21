using Shared.Enums;
using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class Brochure : TEntity
    {
        [Required]
        public string Name { get; set; }
        [Required]
        public TypeOfCover TypeOfCover { get; set; }
        [Required]
        public int NumberOfPages { get; set; }
    }
}
