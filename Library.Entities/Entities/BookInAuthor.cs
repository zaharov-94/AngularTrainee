using System.ComponentModel.DataAnnotations.Schema;

namespace Library.Entities.Entities
{
    public class BookInAuthor:BaseEntity
    {
        [ForeignKey("Book")]
        public int BookId { get; set; }
        public virtual Book Book { get; set; }
        [ForeignKey("Author")]
        public int AuthorId { get; set; }
        public virtual Author Author { get; set; }
    }
}
