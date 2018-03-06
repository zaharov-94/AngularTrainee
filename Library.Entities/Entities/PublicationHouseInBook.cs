using System.ComponentModel.DataAnnotations.Schema;

namespace Library.Entities.Entities
{
    public class PublicationHouseInBook : BaseEntity
    {
        [ForeignKey("Book")]
        public int BookId { get; set; }
        public virtual Book Book { get; set; }
        [ForeignKey("PublicationHouse")]
        public int PublicationHouseId { get; set; }
        public virtual PublicationHouse PublicationHouse { get; set; }
    }
}
