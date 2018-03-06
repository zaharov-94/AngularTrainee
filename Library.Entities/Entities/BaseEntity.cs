using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class BaseEntity
    {
        [Key]
        public int Id { get; set; }
    }
}
