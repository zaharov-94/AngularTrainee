using Library.Entities.Entities;
using Library.Entities.Entities.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Library.DAL.Context
{
    public class ApplicationContext : IdentityDbContext<ApplicationUser>
    {
        public DbSet<Book> Books { get; set; }
        public DbSet<Brochure> Brochures { get; set; }
        public DbSet<Magazine> Magazines { get; set; }
        public DbSet<PublicationHouse> PublicationHouses { get; set; }
        public DbSet<ClientProfile> ClientProfiles { get; set; }
        public DbSet<PublicationHouseBook> PublicationHouseBooks { get; set; }

        public ApplicationContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
