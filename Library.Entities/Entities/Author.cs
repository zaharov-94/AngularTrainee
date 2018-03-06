using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class Author:BaseEntity
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
    }
}
