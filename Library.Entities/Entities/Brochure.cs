using Shared.Enums;
using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class Brochure : BaseEntity
    {
        public string Name { get; set; }
        public TypeOfCover TypeOfCover { get; set; }
        public int NumberOfPages { get; set; }
    }
}
