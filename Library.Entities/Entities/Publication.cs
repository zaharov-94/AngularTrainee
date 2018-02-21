using Shared.Enums;

namespace Library.Entities.Entities
{
    public class Publication : TEntity
    {
        public string Name { get; set; }
        public PublicationType Type { get; set; }
    }
}
