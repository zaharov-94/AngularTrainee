using AutoMapper;
using Library.BLL.MapperProfiles;
using Library.BLL.Services;
using Library.DAL.Context;
using Library.Entities.Entities.Identity;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using System.IO;

namespace Library.WebCore
{
  public class Startup
    {
    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
        public Startup(IConfiguration configuration)
        {
          Configuration = configuration;
          
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            Mapper.Initialize(cfg =>
            {
              cfg.AddProfile<BookToBookView>();
              cfg.AddProfile<BookViewToBook>();
              cfg.AddProfile<PublicationHouseToPublicationHouseView>();
            });
            services.AddDbContext<ApplicationContext>(options =>
                      options.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));
            services.AddTransient<BookService>();
            services.AddTransient<BrochureService>();
            services.AddTransient<PublicationHouseService>();
            services.AddTransient<PublicationService>();
            services.AddTransient<MagazineService>();
            services.AddIdentity<ApplicationUser, IdentityRole>()
                  .AddEntityFrameworkStores<ApplicationContext>();
            services.AddMvc();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseMvc();
            app.Run(async (context) =>
            {
              context.Response.ContentType = "text/html";
              await context.Response.SendFileAsync(Path.Combine(env.WebRootPath, "index.html"));
            });
    } 
    }
}