using Shared.Enums;

namespace Library.Entities.Entities
{
    public class Publication : BaseEntity
    {
        public string Name { get; set; }
        public PublicationType Type { get; set; }
    }
}
