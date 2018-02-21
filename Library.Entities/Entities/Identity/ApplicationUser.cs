using Microsoft.AspNetCore.Identity;

namespace Library.Entities.Entities.Identity
{
    public class ApplicationUser : IdentityUser
    {
        public virtual ClientProfile ClientProfile { get; set; }
    }
}
