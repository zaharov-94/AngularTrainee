using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace Library.Entities.Entities
{
    public class PublicationHouse : BaseEntity
    {
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
