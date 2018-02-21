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
        //public ApplicationContext() : base("PublicationsContext")
        //{
        //    Database.SetInitializer<ApplicationContext>(new CreateDatabaseIfNotExists<ApplicationContext>());
        //    Database.SetInitializer<ApplicationContext>(new DataInitializer());
        //}
        //public static ApplicationContext Create()
        //{
        //    return new ApplicationContext();
        //}
        //protected override void OnModelCreating(ModelBuilder builder)
        //{
        //    base.OnModelCreating(builder);
        //    // Customize the ASP.NET Identity model and override the defaults if needed.
        //    // For example, you can rename the ASP.NET Identity table names and more.
        //    // Add your customizations after calling base.OnModelCreating(builder);
        //}

        internal Task SaveAsync()
        {
            throw new NotImplementedException();
        }
    }
}
